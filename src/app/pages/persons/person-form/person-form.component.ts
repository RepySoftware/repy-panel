import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonType, PersonTypeValues } from '../../../enums/person-type';
import { StringHelper } from '../../../helpers/string-helper';
import { Person } from '../../../models/api/person';
import { PersonPhone } from '../../../models/api/person-phone';
import { AddressConfig } from '../../../models/others/address-config';
import { PersonOutput } from '../../../models/output/person.output';
import { PersonPhoneView } from '../../../models/ui/person-phone-view';
import { LoaderService } from '../../../services/loader.service';
import { PersonService } from '../../../services/person.service';
import { ToastService } from '../../../services/toast.service';
import { AddressConfigComponent } from '../../../shared/address-config/address-config.component';
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

  public isModal: boolean;

  public personId: number;
  public person: Person;

  public phones: PersonPhoneView[] = [];

  public personForm: FormGroup;

  public personTypes: string[] = PersonTypeValues();

  public documentNumberMasks = {
    [PersonType.NORMAL]: '000.000.000-00',
    [PersonType.LEGAL]: '00.000.000/0000-00'
  }

  constructor(
    private _personService: PersonService,
    private _activatedRoute: ActivatedRoute,
    private _loader: LoaderService,
    private _toast: ToastService,
    private _addressConfigService: AddressConfigService,
    @Inject(MAT_DIALOG_DATA) public inputData: PersonFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.personId = this._activatedRoute.snapshot.params.personId || this.inputData.personId;

    this.isModal = !!this.inputData.personId;

    if (this.personId) {
      this.getPerson().then(() => this.setFormValues());
    }
  }

  private initForm(): void {

    this.personForm = new FormGroup({
      type: new FormControl(PersonType.NORMAL, Validators.required),
      documentNumber: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      tradeName: new FormControl(null),
      email: new FormControl(null, Validators.email),
      isSupplier: new FormControl({ value: null, disabled: true }),
      isCustomer: new FormControl(true),
      isManager: new FormControl(null),
      isDriver: new FormControl(null)
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
    this.personForm.get('isManager').setValue(this.person.isManager);
    this.personForm.get('isDriver').setValue(this.person.isDriver);

    this._addressConfigService.address = this.person.address;
    this._addressConfigService.setFormValues();

    this.phones = this.person.phones;
  }

  private getPerson(personId: number = this.personId): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();
      this._personService.getById(personId).subscribe(response => {
        this._loader.dismiss();
        this.person = response;

        resolve();
      }, error => {
        this._loader.dismiss();
        this._toast.showError(error);
      });
    });
  }

  public addPhone(phoneInput): void {

    const phone: string = phoneInput.value ? StringHelper.getOnlyNumbers(phoneInput.value) : null;

    if (!phone || phone.length < 8) {
      this._toast.open('Telefone inválido');
      throw new Error('Invalid phone');
    }

    this.phones.push({ phone });

    phoneInput.value = null;
    phoneInput.focus();
  }

  public removePhone(index: number): void {
    this.phones.splice(index, 1);
  }

  public save(): void {

    if (!this.personForm.valid) {
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const personOutput: PersonOutput = {
      type: this.personForm.get('type').value,
      documentNumber: this.personForm.get('documentNumber').value,
      name: this.personForm.get('name').value,
      tradeName: this.personForm.get('tradeName').value,
      email: this.personForm.get('email').value,
      address: this._addressConfigService.address && this._addressConfigService.address.description ? {
        description: this._addressConfigService.address.description,
        zipCode: this._addressConfigService.address.zipCode,
        city: this._addressConfigService.address.city,
        region: this._addressConfigService.address.region,
        country: this._addressConfigService.address.country,
        complement: this._addressConfigService.address.complement,
        referencePoint: this._addressConfigService.address.referencePoint,
        latitude: this._addressConfigService.address.latitude,
        longitude: this._addressConfigService.address.longitude
      } : null,
      isCustomer: this.personForm.get('isCustomer').value,
      isManager: this.personForm.get('isManager').value,
      isDriver: this.personForm.get('isDriver').value,
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
      this._toast.open('Salvo com sucesso!');

      this.person = response;

      this.initForm();
      this.setFormValues();
    }, error => {
      this._loader.dismiss();
      this._toast.showError(error);
    });
  }
}
