import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PersonType, PersonTypeValues } from '../../../enums/person-type';
import { StringHelper } from '../../../helpers/string-helper';
import { Person } from '../../../models/api/person';
import { PersonPhone } from '../../../models/api/person-phone';
import { AddressConfig } from '../../../models/others/address-config';
import { PersonPhoneView } from '../../../models/ui/person-phone-view';
import { LoaderService } from '../../../services/loader.service';
import { PersonService } from '../../../services/person.service';
import { ToastService } from '../../../services/toast.service';

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

  public addressConfig: AddressConfig;
  public phones: PersonPhoneView[];

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
      isCustomer: new FormControl(null),
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

    this.addressConfig = this.person.address;
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

    this.phones.push({ phone: phoneInput.value });

    phoneInput.value = null;
    phoneInput.focus();
  }

  public removePhone(index: number): void {
    this.phones.splice(index, 1);
  }

  public save(): void {

  }
}
