import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../../../models/api/employee';
import { EmployeeFilter } from '../../../../models/output/filters/employee.filter';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { EmployeeService } from '../../../../services/employee.service';
import { AutocompleteComponent } from '../../../../shared/autocomplete/autocomplete.component';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-delivery',
  templateUrl: './pos-delivery.component.html',
  styleUrls: ['./pos-delivery.component.scss']
})
export class PosDeliveryComponent implements OnInit {

  @ViewChild('employeeDriverAutocomplete') public employeeDriverAutocomplete: AutocompleteComponent;
  @ViewChild('deliverySchedulePicker') public deliverySchedulePicker: ElementRef;

  public employeeDriverSearchAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Entregador',
    onGetItems: query => this.employeeDriverSearchAutocompleteOnGetItems(query),
    onSelectItem: item => this.employeeDriverSearchAutocompleteOnSelectItem(item)
  }

  constructor(
    public salesPosService: SalesPosService,
    private _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
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
    this.salesPosService.employeeDriver = item.value;
    this.employeeDriverAutocomplete.clear();
  }

  public unselectEmployeeDriver(): void {
    this.salesPosService.employeeDriver = null;
  }

  public onDefineDeliverySchedule(): void {
    console.log(this.deliverySchedulePicker.nativeElement.value);
  }
}
