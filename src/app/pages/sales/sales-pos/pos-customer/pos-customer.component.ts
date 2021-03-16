import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from '../../../../models/api/person';
import { PersonSearchFilter } from '../../../../models/output/filters/person-search.filter';
import { LoaderService } from '../../../../services/loader.service';
import { PersonService } from '../../../../services/person.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-pos-customer',
  templateUrl: './pos-customer.component.html',
  styleUrls: ['./pos-customer.component.scss']
})
export class PosCustomerComponent implements OnInit {

  @ViewChild('generalSearch') public generalSearchElement: ElementRef;
  @ViewChild('nameSearch') public nameSearchElement: ElementRef;
  @ViewChild('phoneSearch') public phoneSearchElement: ElementRef;
  @ViewChild('addressSearch') public addressSearchElement: ElementRef;

  public persons: Person[] = [];
  public selectedPerson: Person;

  public personSearchFilter: PersonSearchFilter = {
    limit: 30,
    index: 0
  }

  public tableColumns: string[] = [
    'id',
    'name',
    'phones',
    'address',
    'options'
  ]

  constructor(
    private _personService: PersonService,
    private _loader: LoaderService,
    private _toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  private getPersons(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._personService.search(this.personSearchFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset)
          this.persons = [];

        this.persons = this.persons.concat(response);

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showError(error);
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
  }

  public search(): void {

    this.personSearchFilter.q = this.generalSearchElement.nativeElement.value || null;
    this.personSearchFilter.name = this.nameSearchElement.nativeElement.value || null;
    this.personSearchFilter.phone = this.phoneSearchElement.nativeElement.value || null;
    this.personSearchFilter.address = this.addressSearchElement.nativeElement.value || null;

    this.personSearchFilter.index = 0;
    this.getPersons({ reset: true });
  }

}
