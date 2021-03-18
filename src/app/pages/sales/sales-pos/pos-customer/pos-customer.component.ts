import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { copyToClipboard } from '../../../../functions/copy-to-clipboard';
import { Person } from '../../../../models/api/person';
import { PersonSearch } from '../../../../models/api/person-search';
import { PersonSearchFilter } from '../../../../models/output/filters/person-search.filter';
import { LoaderService } from '../../../../services/loader.service';
import { PersonService } from '../../../../services/person.service';
import { ToastService } from '../../../../services/toast.service';
import { PersonFormComponent, PersonFormInputData } from '../../../persons/person-form/person-form.component';
import { SalesPosService } from '../sales-pos.service';

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
    private _toast: ToastService,
    private _dialog: MatDialog,
    public salesPosService: SalesPosService
  ) { }

  ngOnInit(): void {
  }

  private getPersons(options: { reset?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._personService.search(this.personSearchFilter).subscribe(response => {
        this._loader.dismiss();

        if (options.reset) {
          this.personSearchFilter.index = 0;
          this.persons = [];
        }

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

  public selectPersonCustomer(person: PersonSearch): void {
    this._loader.show();
    this._personService.getById(person.id).subscribe(response => {
      this._loader.dismiss();
      this.salesPosService.personCustomer = response;
    }, error => {
      this._loader.dismiss();
      this._toast.showError(error);
    });
  }

  public unselectPersonCustomer(): void {
    this.salesPosService.personCustomer = null;
  }

  public copyAddressLink(person: PersonSearch | Person): void {

    let addressLink: string;
    let addressComplete: string;

    if ((person as PersonSearch).addressDescription) {

      const p = (person as PersonSearch);

      addressLink = p.addressDescription;

      addressComplete = `${p.addressDescription}${p.addressComplement ? ' (compl:' + p.addressComplement + ')' : ''}${p.addressReferencePoint ? ' - ' + p.addressReferencePoint : ''}`;

    } else {

      const p = (person as Person);

      addressLink = p.address.description;

      addressComplete = `${p.address.description}${p.address.complement ? ' (compl:' + p.address.complement + ')' : ''}${p.address.referencePoint ? ' - ' + p.address.referencePoint : ''}`;

    }

    const content = `https://www.google.com.br/maps?q=${encodeURI(addressLink)}\n${addressComplete}`;

    const copyResult = copyToClipboard(content);
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }

}
