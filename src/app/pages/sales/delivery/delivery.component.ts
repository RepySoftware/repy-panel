import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaleOrderStatus } from '../../../enums/sale-order-status';
import { copyToClipboard } from '../../../functions/copy-to-clipboard';
import { AddressHelper } from '../../../helpers/address.helper';
import { StringHelper } from '../../../helpers/string-helper';
import { Address } from '../../../models/api/address';
import { Employee } from '../../../models/api/employee';
import { SaleOrder } from '../../../models/api/sale-order';
import { EmployeeFilter } from '../../../models/output/filters/employee.filter';
import { AutocompleteItem } from '../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../models/ui/autocomplete-options';
import { EmployeeService } from '../../../services/employee.service';
import { SaleOrderService } from '../../../services/sale-order.service';
import { StorageService } from '../../../services/storage.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDeliveryComponent, ConfirmDeliveryInputData } from './confirm-delivery/confirm-delivery.component';
import { DeliveryKanbanBoard } from './models/delivery-kanban-board';
import { DeliveryKanbanCard } from './models/delivery-kanban-card';
import { DeliveryKambanColumn } from './models/delivery-kanban-column';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class DeliveryComponent implements OnInit {

  public board: DeliveryKanbanBoard = {
    columns: [
      {
        title: 'Sem entregador',
        cards: [],
        undefinedDriver: true
      }
    ]
  }

  public employeeDriverSearchAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Adicionar entregador',
    onGetItems: query => this.employeeDriverSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.employeeDriverSearchAutocompleteOnSelectItem(item)
  }

  constructor(
    private _saleOrderService: SaleOrderService,
    private _toast: ToastService,
    private _employeeService: EmployeeService,
    private _dialog: MatDialog,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.refreshSaleOrders({ createColumns: true });
  }

  public refreshSaleOrders(options?: { createColumns?: boolean }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getSaleOrders().then(saleOrders => {

        if (options && options.createColumns) {
          saleOrders
            .filter(so => so.employeeDriver)
            .forEach(so => {
              if (!this.board.columns.find(x => x.employeeDriverId == so.employeeDriver.id)) {
                this.board.columns.push({
                  employeeDriverId: so.employeeDriver.id,
                  title: so.employeeDriver.name,
                  cards: []
                });
              }
            });
        }

        this.board.columns.forEach(c => {

          let driverSaleOrders: SaleOrder[] = [];

          if (!c.undefinedDriver) {
            driverSaleOrders = saleOrders.filter(so => so.employeeDriver && so.employeeDriver.id == c.employeeDriverId);
          } else {
            driverSaleOrders = saleOrders.filter(so => !so.employeeDriver);
          }

          c.cards = driverSaleOrders.map(dso => {
            return {
              saleOrderId: dso.id,
              saleOrder: dso
            }
          });

        });

        this.sortCards();

        resolve();
      });
    });
  }

  private sortCards(): void {
    this.board.columns.forEach(column => column.cards.sort((a, b) => a.saleOrder.index - b.saleOrder.index));
  }

  private getSaleOrders(): Promise<SaleOrder[]> {
    return new Promise((resolve, reject) => {
      this._saleOrderService.getAll({
        index: 0,
        limit: 9999,
        status: SaleOrderStatus.PENDING
      }).subscribe(response => {
        resolve(response);
      }, error => {
        this._toast.showHttpError(error);
      });
    });
  }

  private employeeDriverSearchAutocompleteOnGetItems(query: string): Observable<AutocompleteItem<Employee>[]> {

    const filter: EmployeeFilter = {
      index: 0,
      limit: 8,
      q: query,
      isDriver: true,
    };

    return this._employeeService.getAll(filter).pipe(
      map(res => {
        return res.map(x => {
          return {
            label: x.name,
            value: x
          } as AutocompleteItem<Employee>
        });
      })
    )
  }

  private employeeDriverSearchAutocompleteOnSelectItem(item: AutocompleteItem<Employee>): void {

    const column: DeliveryKambanColumn = {
      employeeDriverId: item.value.id,
      title: item.value.name,
      cards: []
    };

    this.board.columns.push(column);

    this.refreshSaleOrders();
  }

  private refreshIndexes(event: CdkDragDrop<DeliveryKanbanCard[]>): Promise<void> {
    return new Promise((resolve, reject) => {
      const items = event.container.data.map((x, i) => {

        x.saleOrder.index = i;

        return {
          saleOrderId: x.saleOrderId,
          index: x.saleOrder.index
        }
      });

      this._saleOrderService.updateIndex(items).subscribe(response => {
        resolve();
      }, error => {
        this._toast.showHttpError(error);
      });
    });
  }

  private changeEmployeeDriver(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColum: DeliveryKambanColumn): Promise<void> {
    return new Promise((resolve, reject) => {

      const saleOrder = event.container.data[event.currentIndex].saleOrder;

      this._saleOrderService.updateEmployeeDriver({
        saleOrderId: saleOrder.id,
        employeeDriverId: currentColum.employeeDriverId
      }).subscribe(response => {
        resolve();
      }, error => {
        this._toast.showHttpError(error);
      });
    });
  }

  public drop(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColumn: DeliveryKambanColumn) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.refreshIndexes(event);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.changeEmployeeDriver(event, currentColumn).then(() => this.refreshIndexes(event));
    }
  }

  public removeColumn(employeeDriverId: number): void {

    this.board.columns.splice(
      this.board.columns.findIndex(x => x.employeeDriverId == employeeDriverId),
      1
    );
  }

  public copyAddressToClipboard(address: Address): void {

    const copyResult = copyToClipboard(AddressHelper.format(address));
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }

  public openConfirmDelivery(saleOrder: SaleOrder): void {
    const dialog = this._dialog.open(ConfirmDeliveryComponent, {
      width: '50%',
      data: { saleOrder } as ConfirmDeliveryInputData
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.refresh) {
        this.refreshSaleOrders();
      }
    });
  }

  public copySaleOrderToClipboard(saleOrder: SaleOrder, includeObservation: boolean = false): void {

    let content = '';
    content += `${AddressHelper.format(saleOrder.deliveryAddress)}`;
    content += `\n${saleOrder.products.map(p => `- ${p.quantity}x ${p.companyBranchProduct.product.name} - ${StringHelper.toMoney(p.salePrice)}`).join('\n')}`
    content += `\nTotal: *${StringHelper.toMoney(saleOrder.totalSalePrice)}*`;

    if (includeObservation) {
      content += `\n_Obs: ${saleOrder.observation}_`;
    }

    const copyResult = copyToClipboard(content);

    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!', 'success');
    else {
      this._toast.open('Erro ao copiar :(', 'error');
    }
  }

  public getSaleOrderProductsFormatted(saleOrder: SaleOrder): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(
      saleOrder.products.map(p => `- ${p.quantity}x ${p.companyBranchProduct.product.name}`).join('<br>')
    );
  }

}
