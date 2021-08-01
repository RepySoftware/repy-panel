import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { copyToClipboard } from '../../../../functions/copy-to-clipboard';
import { Person } from '../../../../models/api/person';
import { PersonSearch } from '../../../../models/api/person-search';
import { PersonSearchFilter } from '../../../../models/output/filters/person-search.filter';
import { LoaderService } from '../../../../services/loader.service';
import { PersonService } from '../../../../services/person.service';
import { ToastService } from '../../../../services/toast.service';
import { PersonFormComponent, PersonFormInputData } from '../../../persons/person-form/person-form.component';
import { SalesPosService } from '../sales-pos.service';
import { PosCustomerSalesComponent, PosCustomerSalesInputData } from './pos-customer-sales/pos-customer-sales.component';

@Component({
  selector: 'app-pos-customer',
  templateUrl: './pos-customer.component.html',
  styleUrls: ['./pos-customer.component.scss']
})
export class PosCustomerComponent implements OnInit, AfterViewInit {

  @ViewChild('generalSearch') public generalSearchElement: ElementRef;
  @ViewChild('nameSearch') public nameSearchElement: ElementRef;
  @ViewChild('phoneSearch') public phoneSearchElement: ElementRef;
  @ViewChild('addressSearch') public addressSearchElement: ElementRef;

  public personSearchFilter: PersonSearchFilter = {
    limit: 30,
    index: 0
  }

  public tableColumns: string[] = [
    'id',
    'name',
    'phones',
    'address',
    'moreInfo',
    'options'
  ]

  constructor(
    private _personService: PersonService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _dialog: MatDialog,
    public salesPosService: SalesPosService,
    private _activatedRoute: ActivatedRoute,
    private _cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const personCustomerId = this._activatedRoute.snapshot.queryParams.personCustomerId;
    if (personCustomerId){
      this.generalSearchElement.nativeElement.value = `id:${personCustomerId}`;
      this._cdRef.detectChanges();
      this.search();
    }
  }

  private getPersons(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._personService.search(this.personSearchFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset) {
          this.personSearchFilter.index = 0;
          this.salesPosService.persons = [];
        }

        this.salesPosService.persons = this.salesPosService.persons.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public loadMore(): void {
    this.personSearchFilter.index++;
    this.getPersons();
  }

  public clearFilter(): void {

    this.personSearchFilter.q = null;
    this.personSearchFilter.name = null;
    this.personSearchFilter.phone = null;
    this.personSearchFilter.address = null;

    this.generalSearchElement.nativeElement.value = null;
    this.nameSearchElement.nativeElement.value = null;
    this.phoneSearchElement.nativeElement.value = null;
    this.addressSearchElement.nativeElement.value = null;
  }

  public search(): void {

    this.personSearchFilter.q = this.generalSearchElement.nativeElement.value || null;
    this.personSearchFilter.name = this.nameSearchElement.nativeElement.value || null;
    this.personSearchFilter.phone = this.phoneSearchElement.nativeElement.value || null;
    this.personSearchFilter.address = this.addressSearchElement.nativeElement.value || null;

    this.personSearchFilter.index = 0;
    this.getPersons({ reset: true });
  }

  public openPersonForm(personId?: number): void {
    const data: PersonFormInputData = { personId };

    const dialog = this._dialog.open(PersonFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getPersons({ reset: true });
      }
    });
  }

  public openPersonCustomerSales(personCustomer: Person): void {
    const data: PosCustomerSalesInputData = { personCustomer };

    this._dialog.open(PosCustomerSalesComponent, {
      width: '90%',
      height: '90%',
      data
    });
  }

  public selectPersonCustomer(person: PersonSearch): void {
    this._loader.show();
    this._personService.getById(person.id).subscribe(response => {
      this._loader.dismiss();
      this.salesPosService.personCustomer = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public unselectPersonCustomer(): void {
    this.salesPosService.personCustomer = null;
  }

}
