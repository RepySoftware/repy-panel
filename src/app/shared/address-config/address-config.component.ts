import { Component, ElementRef, ViewChild, Input, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { Address as GoogleAddress } from 'ngx-google-places-autocomplete/objects/address';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { AddressConfigService } from './address-config.service';

@Component({
    selector: 'app-address-config',
    templateUrl: './address-config.component.html',
    styleUrls: ['./address-config.component.scss']
})
export class AddressConfigComponent implements AfterViewInit {

    @ViewChild('addressSearch', { static: false }) public addressSearchInput: ElementRef;

    public insertedAddress = false;
    public addressTouched = false;

    public addressForm: FormGroup;

    constructor(
        private _addressConfigService: AddressConfigService,
        private _toast: ToastService,
        private _cdRef: ChangeDetectorRef
    ) {
        this.clearAddress();
        this.initForm();

        this._addressConfigService.setFormValuesEmitter.subscribe(() => this.setFormValues());
    }

    ngAfterViewInit() {
        this.setFormValues();
    }

    private initForm(): void {
        this.addressForm = new FormGroup({
            addressSearch: new FormControl(null),
            referencePoint: new FormControl(null),
            complement: new FormControl(null)
        });
    }

    private clearAddress(): void {
        this._addressConfigService.address = {
            description: null,
            zipCode: null,
            city: null,
            region: null,
            country: null,
            referencePoint: null,
            complement: null,
            latitude: null,
            longitude: null
        };
    }

    private setFormValues(): void {

        if (this._addressConfigService.address) {

            // create new instance
            this._addressConfigService.address = {
                description: this._addressConfigService.address.description,
                zipCode: this._addressConfigService.address.zipCode,
                city: this._addressConfigService.address.city,
                region: this._addressConfigService.address.region,
                country: this._addressConfigService.address.country,
                referencePoint: this._addressConfigService.address.referencePoint,
                complement: this._addressConfigService.address.complement,
                latitude: this._addressConfigService.address.latitude,
                longitude: this._addressConfigService.address.longitude
            };

            this.addressSearchInput.nativeElement.value = this._addressConfigService.address.description;

            this.addressForm.get('referencePoint').setValue(this._addressConfigService.address.referencePoint);
            this.addressForm.get('complement').setValue(this._addressConfigService.address.complement);

            this.insertedAddress = true;
            this._cdRef.detectChanges();
        } else {
            this.clearAddress();
        }
    }

    public addressChanged(address: GoogleAddress): void {
        this._addressConfigService.address.description = address.formatted_address;
        this._addressConfigService.address.city = address.address_components.find(x => x.types.includes('administrative_area_level_2')).long_name;
        this._addressConfigService.address.region = address.address_components.find(x => x.types.includes('administrative_area_level_1')).long_name;
        this._addressConfigService.address.country = address.address_components.find(x => x.types.includes('country')).long_name;

        const postalCode = address.address_components.find(x => x.types.includes('postal_code'));
        this._addressConfigService.address.zipCode = postalCode ? postalCode.long_name : null;

        this._addressConfigService.address.latitude = address.geometry.location.lat();
        this._addressConfigService.address.longitude = address.geometry.location.lng();

        this.insertedAddress = true;
    }

    public onInputExtraFields(field: 'complement'|'referencePoint'): void {
        this._addressConfigService.address[field] = this.addressForm.get(field).value;
    }

    public addressFocus(): void {
        this.addressSearchInput.nativeElement.value = null;
        this.insertedAddress = false;

        this.clearAddress();
    }

    public addressBlur(): void {
        this.addressTouched = true;
    }
}
