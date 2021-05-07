import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeliveryExtraCardType } from '../../../enums/delivery-extra-card-type';
import { DeliveryType } from '../../../enums/delivery-type';
import { Delivery } from '../../../models/api/delivery';
import { DeliveryInstruction } from '../../../models/api/delivery-instruction';
import { Employee } from '../../../models/api/employee';
import { EmployeeFilter } from '../../../models/output/filters/employee.filter';
import { AutocompleteItem } from '../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../models/ui/autocomplete-options';
import { DeliveryService } from '../../../services/delivery.service';
import { EmployeeService } from '../../../services/employee.service';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDeliveryComponent, ConfirmDeliveryInputData } from './confirm-delivery/confirm-delivery.component';
import { DeliveryInstructionFormComponent, DeliveryInstructionFormInputData } from './delivery-instruction-form/delivery-instruction-form.component';
import { DeliveryFinalizeEvent } from './models/delivery-finalize-event';
import { DeliveryKanbanBoard } from './models/delivery-kanban-board';
import { DeliveryKanbanCard } from './models/delivery-kanban-card';
import { DeliveryKambanColumn } from './models/delivery-kanban-column';
import { DeliverySaleOrderUpdateShowObservationToDriverEvent } from './models/delivery-sale-order-update-show-observation-to-driver';
import { SalesDeliveryService } from './sales-delivery.service';

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
    private _loader: LoaderService,
    private _salesDeliveryService: SalesDeliveryService
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

  public refreshDeliveries(options?: { createColumns?: boolean, force?: boolean, showLoader?: boolean }): Promise<void> {

    return new Promise((resolve, reject) => {
      this.getDeliveries(options && options.showLoader).then(deliveries => {

        if (this._refreshIntervalActive || (options && options.force)) {

          this._salesDeliveryService.deliveries = deliveries;

          if (options && options.createColumns) {

            deliveries
              .filter(so => so.employeeDriver)
              .forEach(so => {
                if (!this.board.columns.find(x => x.employeeDriverId == so.employeeDriver.id)) {
                  this.board.columns.push({
                    employeeDriverId: so.employeeDriver.id,
                    title: so.employeeDriver.name,
                    color: so.employeeDriver.color,
                    cards: []
                  });
                }
              });
          }

          this.board.columns.forEach(c => {

            let driverDeliveries: Delivery[] = [];

            if (!c.defaultColumn) {
              driverDeliveries = deliveries.filter(so => so.employeeDriver && so.employeeDriver.id == c.employeeDriverId);
            } else {
              driverDeliveries = deliveries.filter(so => !so.employeeDriver);
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

  private getDeliveries(showLoader = false): Promise<Delivery[]> {
    return new Promise((resolve, reject) => {

      if (showLoader)
        this._loader.show();

      this._deliveryService.get().subscribe(response => {

        if (showLoader)
          this._loader.dismiss();

        resolve(response);
      }, error => {

        if (showLoader)
          this._loader.dismiss();

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
      color: item.value.color,
      cards: []
    };

    this.board.columns.push(column);

    this.refreshDeliveries();
  }

  private refreshIndexes(event: CdkDragDrop<DeliveryKanbanCard[]>, showLoader = false): Promise<void> {
    return new Promise((resolve, reject) => {

      const items: { id: number, index: number, type: DeliveryType }[] = [];

      event.container.data
        .forEach((x, i) => {

          if (x.delivery) {
            x.delivery.index = i;

            items.push({
              id: x.delivery[x.delivery.type].id,
              index: x.delivery.index,
              type: x.delivery.type
            });
          }

        });

      if (showLoader)
        this._loader.show();

      this._deliveryService.updateIndex(items).subscribe(response => {

        if (showLoader)
          this._loader.dismiss();

        resolve();
      }, error => {

        if (showLoader)
          this._loader.dismiss();

        this._toast.showHttpError(error);
        resolve();
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

  public async drop(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColumn: DeliveryKambanColumn) {

    const isExtraCard = !!event.previousContainer.data[event.previousIndex].extra;

    if (isExtraCard) {

      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      try {
        const result = await this.extraCardDropped(event, currentColumn);

        if (result.hasUpdate) {
          await this.refreshIndexes(event, true);
          await this.refreshDeliveries({ showLoader: true, force: true });
        } else {
          currentColumn.cards.splice(event.currentIndex, 1);
        }

        this.initRefreshInterval();
      } catch (error) {
        this.initRefreshInterval();
        throw error;
      }

      return;
    }

    if (event.previousContainer === event.container) {

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      try {
        await this.refreshIndexes(event);
        this.initRefreshInterval();
        await this.refreshDeliveries({ force: true });
      } catch (error) {
        this.initRefreshInterval();
        throw error;
      }

    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      try {
        await this.changeEmployeeDriver(event, currentColumn);
        await this.refreshIndexes(event);
        this.initRefreshInterval();
        await this.refreshDeliveries({ force: true });
      } catch (error) {
        this.initRefreshInterval();
        throw error;
      }
    }
  }

  private extraCardDropped(event: CdkDragDrop<DeliveryKanbanCard[]>, currentColumn: DeliveryKambanColumn): Promise<{ hasUpdate: boolean }> {

    return new Promise((resolve, reject) => {

      const previousCard = event.previousContainer.data[event.previousIndex];

      if (previousCard.extra.type == DeliveryExtraCardType.deliveryInstruction) {

        const dialog = this._dialog.open(DeliveryInstructionFormComponent, {
          width: '50%',
          data: {
            employeeDriverId: currentColumn.employeeDriverId,
            index: event.currentIndex
          } as DeliveryInstructionFormInputData
        });

        dialog.afterClosed().subscribe(result => {
          resolve({ hasUpdate: result && result.hasUpdate });
        });

      } else {
        resolve({ hasUpdate: false });
      }

    });
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
      if (result && result.hasUpdate) {
        this.refreshDeliveries({ force: true, showLoader: true });
      }
    });
  }

  public updateShowObservationToDriver(event: DeliverySaleOrderUpdateShowObservationToDriverEvent): void {

    const { saleOrderId, value } = event;

    this._deliveryService.updateShowObservationToDriver({ saleOrderId, value }).subscribe(response => response, error => {
      this._toast.showHttpError(error);
    });
  }
}
