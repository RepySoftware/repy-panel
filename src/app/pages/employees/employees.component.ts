import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../../models/api/employee';
import { EmployeeService } from '../../services/employee.service';
import { LoaderService } from '../../services/loader.service';
import { TitleService } from '../../services/title.service';
import { ToastService } from '../../services/toast.service';
import { EmployeeFormComponent, EmployeeFormInputData } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[] = [];

  public tableColumns: string[] = [
    'id',
    'name',
    'color',
    'roles',
    'vehicle',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _employeeService: EmployeeService,
    private _dialog: MatDialog,
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('Funcionários');
    this.getEmployees();
  }

  private getEmployees(): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._employeeService.getAll({ index: 0, limit: Number.MAX_SAFE_INTEGER }).subscribe(response => {
        this._loader.dismiss();
        this.employees = response;

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public openForm(employeeId?: number): void {

    const data: EmployeeFormInputData = { employeeId };

    const dialog = this._dialog.open(EmployeeFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getEmployees();
      }
    });
  }

  public getEmployeeTypes(employee: Employee): string {

    const types: string[] = [];

    if (employee.isManager) types.push('Gerente');
    if (employee.isAgent) types.push('Agente');
    if (employee.isDriver) types.push('Entregador');

    return types.join(', ');
  }
}
