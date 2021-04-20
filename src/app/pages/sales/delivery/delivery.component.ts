import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Delivery } from '../../../models/api/delivery';
import { Employee } from '../../../models/api/employee';
import { EmployeeFilter } from '../../../models/output/filters/employee.filter';
import { AutocompleteItem } from '../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../models/ui/autocomplete-options';
import { DeliveryService } from '../../../services/delivery.service';
import { EmployeeService } from '../../../services/employee.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDeliveryComponent, ConfirmDeliveryInputData } from './confirm-delivery/confirm-delivery.component';
import { DeliveryExtraCard, DeliveryExtraCardType } from './models/delivery-extra-card';
import { DeliveryFinalizeEvent } from './models/delivery-finalize-event';
import { DeliveryKanbanBoard } from './models/delivery-kanban-board';
import { DeliveryKanbanCard } from './models/delivery-kanban-card';
import { DeliveryKambanColumn } from './models/delivery-kanban-column';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class DeliveryComponent implements OnInit, OnDestroy {

  public board: DeliveryKanbanBoard = {
    columns: [
      {
        title: 'Pendente',
        cards: [],
        defaultColumn: true
      }
    ]
  }

  public extraCards: DeliveryKanbanCard[] = [
    {
      extra: { type: DeliveryExtraCardType.deliveryInstruction }
    }
  ]

  public employeeDriverSearchAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Adicionar entregador',
    onGetItems: query => this.employeeDriverSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.employeeDriverSearchAutocompleteOnSelectItem(item)
  }

  public autoRefresh = true;

  private static REFRESH_INTERVAL = 6000;
  private _refreshIntervalId: any;
  private _refreshIntervalActive = false;

  constructor(
    // private _saleOrderService: SaleOrderService,
    private _deliveryService: DeliveryService,
    private _toast: ToastService,
    private _employeeService: EmployeeService,
    private _dialog: MatDialog,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.refreshDeliveries({ createColumns: true });

    if (this.autoRefresh)
      this.initRefreshInterval();
  }

  ngOnDestroy(): void {
    this.clearRefreshInterval();
  }

  private initRefreshInterval(): void {
    if (!this._refreshIntervalActive) {

      this._refreshIntervalId = setInterval(() =>
        this.refreshDeliveries(), DeliveryComponent.REFRESH_INTERVAL
      );

      this._refreshIntervalActive = true;
      console.log('initRefreshInterval', this._refreshIntervalId);
    }
  }

  public autoRefreshChange(value: boolean): void {
    this.autoRefresh = value;

    if (this.autoRefresh) {
      this.initRefreshInterval();
    } else {
      this.clearRefreshInterval();
    }
  }

  private clearRefreshInterval(): void {
    clearInterval(this._refreshIntervalId);
    this._refreshIntervalActive = false;
    console.log('clearRefreshInterval', this._refreshIntervalId);
  }

  public refreshDeliveries(options?: { createColumns?: boolean }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.getDeliveries().then(saleOrders => {

        if (this._refreshIntervalActive) {

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

            let driverDeliveries: Delivery[] = [];

            if (!c.defaultColumn) {
              driverDeliveries = saleOrders.filter(so => so.employeeDriver && so.employeeDriver.id == c.employeeDriverId);
            } else {
              driverDeliveries = saleOrders.filter(so => !so.employeeDriver);
            }

            c.cards = driverDeliveries.map(dso => {
              return { delivery: dso }
            });

          });

          this.sortCards();

        }

        resolve();
      });
    });
  }

  private sortCards(): void {
    this.board.columns.forEach(column => column.cards.sort((a, b) => a.delivery.index - b.delivery.index));
  }

  private getDeliveries(): Promise<Delivery[]> {
    return new Promise((resolve, reject) => {
      this._deliveryService.get().subscribe(response => {
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

    this.refreshDeliveries();
  }

  private refreshIndexes(event: CdkDragDrop<DeliveryKanbanCard[]>): Promise<void> {
    return new Promise((resolve, reject) => {
      const items = event.container.data.map((x, i) => {

        x.delivery.index = i;

        return {
          id: x.delivery[x.delivery.type].id,
          index: x.delivery.index,
          type: x.delivery.type
        }
      });

      this._deliveryService.updateIndex(items).subscribe(response => {
        resolve();
      }, error => {
        this._toast.showHttpError(error);
      });
    });
  }

  private changeEmployeeDriver(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColum: DeliveryKambanColumn): Promise<void> {
    return new Promise((resolve, reject) => {

      const delivery = event.container.data[event.currentIndex].delivery;

      this._deliveryService.updateEmployeeDriver({
        saleOrderId: delivery.saleOrder.id,
        employeeDriverId: currentColum.employeeDriverId
      }).subscribe(response => {
        resolve();
      }, error => {
        this._toast.showHttpError(error);
      });
    });
  }

  public dragStarted(): void {
    this.clearRefreshInterval();
  }

  public drop(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColumn: DeliveryKambanColumn) {

    if (event.previousContainer.data[event.previousIndex].extra) {

      this.extraCardDropped(event, currentColumn).then(() => {
        this.initRefreshInterval();
      });

      return;
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

      this.refreshIndexes(event).then(() => {
        this.initRefreshInterval();
      }).catch(error => {
        this.initRefreshInterval();
      });

    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.changeEmployeeDriver(event, currentColumn).then(() => {
        this.refreshIndexes(event).then(() => {
          this.initRefreshInterval();
        }).catch(error => {
          this.initRefreshInterval();
        });
      });
    }
  }

  private extraCardDropped(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColumn: DeliveryKambanColumn): Promise<void> {
    // const card = event.previousContainer.data[event.previousIndex].extra;
    // return nul

    // TODO: create instruction
  }

  public removeColumn(employeeDriverId: number): void {

    this.board.columns.splice(
      this.board.columns.findIndex(x => x.employeeDriverId == employeeDriverId),
      1
    );
  }

  public openConfirmDelivery(event: DeliveryFinalizeEvent): void {

    const dialog = this._dialog.open(ConfirmDeliveryComponent, {
      width: '50%',
      data: { delivery: event.delivery } as ConfirmDeliveryInputData
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.refresh) {
        this.refreshDeliveries();
      }
    });
  }

}
