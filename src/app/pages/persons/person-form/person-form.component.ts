import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonIcmsContributorTypeList } from '../../../enums/person-icms-contributor.type';
import { PersonTaxRegime, PersonTaxRegimeList } from '../../../enums/person-tax-regime';
import { PersonType, PersonTypeList } from '../../../enums/person-type';
import { StringHelper } from '../../../helpers/string-helper';
import { Person } from '../../../models/api/person';
import { PersonOutput } from '../../../models/output/person.output';
import { PersonPhoneView } from '../../../models/ui/person-phone-view';
import { AlertMessageService } from '../../../services/alert-message.service';
import { LoaderService } from '../../../services/loader.service';
import { PersonService } from '../../../services/person.service';
import { TitleService } from '../../../services/title.service';
import { ToastService } from '../../../services/toast.service';
import { AddressConfigService } from '../../../shared/address-config/address-config.service';

export interface PersonFormInputData {
  personId: number
}

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @ViewChild('phone') public phoneElement: ElementRef;

  public isModal: boolean;

  public personId: number;
  public person: Person;

  public phones: PersonPhoneView[] = [];

  public personForm: FormGroup;

  public personTypes: string[] = PersonTypeList();
  public personTaxRegimes: string[] = PersonTaxRegimeList();
  public personIcmsContributorTypes: string[] = PersonIcmsContributorTypeList();

  public documentNumberMasks = {
    [PersonType.NORMAL]: '000.000.000-00',
    [PersonType.LEGAL]: '00.000.000/0000-00'
  }

  constructor(
    private _personService: PersonService,
    private _activatedRoute: ActivatedRoute,
    private _alert: AlertMessageService,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _addressConfigService: AddressConfigService,
    private _dialogRef: MatDialogRef<PersonFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: PersonFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.personId = this._activatedRoute.snapshot.params.personId || this.inputData.personId;

    this.isModal = !!this.inputData.personId;

    if (this.personId) {
      this.getPerson().then(person => {
        this.setFormValues();
      });
    }
  }

  private initForm(): void {

    this.personForm = new FormGroup({
      type: new FormControl(PersonType.NORMAL, Validators.required),
      documentNumber: new FormControl(null),
      name: new FormControl(null),
      tradeName: new FormControl(null),
      email: new FormControl(null, Validators.email),
      isSupplier: new FormControl(null),
      isCustomer: new FormControl(true),
      taxRegime: new FormControl(PersonTaxRegime.UNDEFINED, Validators.required),
      icmsContributorType: new FormControl(null),
      stateRegistration: new FormControl(null),
      municipalRegistration: new FormControl(null),
      isActive: new FormControl(true),
      observation: new FormControl(null)
    });
  }

  private setFormValues(): void {
    this.personForm.get('type').setValue(this.person.type);
    this.personForm.get('documentNumber').setValue(this.person.documentNumber);
    this.personForm.get('name').setValue(this.person.name);
    this.personForm.get('tradeName').setValue(this.person.tradeName);
    this.personForm.get('email').setValue(this.person.email);
    this.personForm.get('isSupplier').setValue(this.person.isSupplier);
    this.personForm.get('isCustomer').setValue(this.person.isCustomer);
    this.personForm.get('taxRegime').setValue(this.person.taxRegime);
    this.personForm.get('icmsContributorType').setValue(this.person.icmsContributorType);
    this.personForm.get('stateRegistration').setValue(this.person.stateRegistration);
    this.personForm.get('municipalRegistration').setValue(this.person.municipalRegistration);
    this.personForm.get('isActive').setValue(this.person.isActive);
    this.personForm.get('observation').setValue(this.person.observation);

    this._addressConfigService.address = this.person.address;
    this._addressConfigService.setFormValues();

    this.phones = this.person.phones;
  }

  private getPerson(personId: number = this.personId): Promise<Person> {

    return new Promise((resolve, reject) => {
      this._loader.show();
      this._personService.getById(personId).subscribe(response => {
        this._loader.dismiss();
        this.person = response;

        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
      });
    });
  }

  public addPhone(phoneToAdd: string = this.phoneElement.nativeElement.value, clearInput = true, focusInput = true): void {

    const phone: string = phoneToAdd ? StringHelper.getOnlyNumbers(phoneToAdd) : null;

    if (!phone || phone.length < 8) {
      this._toast.open('Telefone inválido');
      return;
    }

    this.phones.push({ phone });

    if (clearInput)
      this.phoneElement.nativeElement.value = null;

    if (focusInput)
      this.phoneElement.nativeElement.focus();
  }

  public removePhone(index: number): void {
    this.phones.splice(index, 1);
  }

  public async save(): Promise<void> {

    if (!this.personForm.valid) {
      this.personForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    if (this.phoneElement.nativeElement.value) {

      const dialog = this._alert.open({
        message: `Você digitou o telefone <strong>${this.phoneElement.nativeElement.value}</strong> mas não adicionou.<br><br>Adicionar telefone?`,
        buttons: [
          {
            text: 'Não',
            color: 'basic',
            closeOnClick: false,
            onClick: dialogRef => dialogRef.close({ closedWithOption: 'no' })
          },
          {
            text: 'Sim',
            color: 'primary',
            onClick: dialogRef => dialogRef.close({ closedWithOption: 'yes' })
          }
        ]
      });

      const result = await dialog.afterClosed().toPromise();

      if (!result?.closedWithOption) {
        return;
      } else if (result?.closedWithOption == 'yes') {
        this.addPhone(this.phoneElement.nativeElement.value, true, false);
      }

    }

    const personOutput: PersonOutput = {
      type: this.personForm.get('type').value,
      documentNumber: this.personForm.get('documentNumber').value,
      name: this.personForm.get('name').value,
      tradeName: this.personForm.get('tradeName').value,
      email: this.personForm.get('email').value,
      address: this._addressConfigService.address && this._addressConfigService.address.street ? {
        description: this._addressConfigService.address.description,
        street: this._addressConfigService.address.street,
        number: this._addressConfigService.address.number,
        zipCode: this._addressConfigService.address.zipCode,
        neighborhood: this._addressConfigService.address.neighborhood,
        city: this._addressConfigService.address.city,
        region: this._addressConfigService.address.region,
        country: this._addressConfigService.address.country,
        complement: this._addressConfigService.address.complement,
        referencePoint: this._addressConfigService.address.referencePoint,
        latitude: this._addressConfigService.address.latitude,
        longitude: this._addressConfigService.address.longitude
      } : null,
      isSupplier: this.personForm.get('isSupplier').value,
      isCustomer: this.personForm.get('isCustomer').value,
      taxRegime: this.personForm.get('taxRegime').value,
      icmsContributorType: this.personForm.get('icmsContributorType').value,
      stateRegistration: this.personForm.get('stateRegistration').value,
      municipalRegistration: this.personForm.get('municipalRegistration').value,
      isActive: this.personForm.get('isActive').value,
      observation: this.personForm.get('observation').value,
      personPhones: this.phones
    }

    let apiCall: Observable<Person>;

    if (this.person) {
      personOutput.id = this.person.id;
      apiCall = this._personService.update(personOutput);
    } else {
      apiCall = this._personService.create(personOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.person = response;

      this.initForm();
      this.setFormValues();

      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }
}
