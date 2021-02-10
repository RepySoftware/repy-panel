import { Component, ElementRef, ViewChild, Input, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { Address as GoogleAddress } from 'ngx-google-places-autocomplete/objects/address';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast.service';
import { AddressConfig } from '../../models/others/address-config';

@Component({
    selector: 'app-address-config',
    templateUrl: './address-config.component.html',
    styleUrls: ['./address-config.component.scss']
})
export class AddressConfigComponent implements OnInit {

    @Input() public address: AddressConfig;

    @ViewChild('addressSearch', { static: false })
    public addressSearchInput: ElementRef;

    public insertedAddress = false;
    public addressTouched = false;

    public addressForm: FormGroup;

    constructor(
        private _toast: ToastService,
        private _cdRef: ChangeDetectorRef
    ) {
        this.initForm();
    }

    ngOnInit() {
        this.setFormValues();
    }

    private initForm(): void {
        this.addressForm = new FormGroup({
            addressSearch: new FormControl(null, Validators.required),
            referencePoint: new FormControl(null),
            complement: new FormControl(null)
        });
    }

    private setFormValues(): void {

        if (this.address) {

            // create new instance
            this.address = {
                description: this.address.description,
                zipCode: this.address.zipCode,
                city: this.address.city,
                region: this.address.region,
                country: this.address.country,
                referencePoint: this.address.referencePoint,
                complement: this.address.complement,
                latitude: this.address.latitude,
                longitude: this.address.longitude
            };

            this.addressSearchInput.nativeElement.value = this.address.description;

            this.addressForm.get('referencePoint').setValue(this.address.referencePoint);
            this.addressForm.get('complement').setValue(this.address.complement);

            this.insertedAddress = true;
            this._cdRef.detectChanges();
        } else {
            this.address = {
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
    }

    public addressChanged(address: GoogleAddress): void {
        this.address.description = address.formatted_address;
        this.address.city = address.address_components.find(x => x.types.includes('administrative_area_level_2')).long_name;
        this.address.region = address.address_components.find(x => x.types.includes('administrative_area_level_1')).long_name;
        this.address.country = address.address_components.find(x => x.types.includes('country')).long_name;

        const postalCode = address.address_components.find(x => x.types.includes('postal_code'));
        this.address.zipCode = postalCode ? postalCode.long_name : null;

        this.address.latitude = address.geometry.location.lat();
        this.address.longitude = address.geometry.location.lng();

        this.insertedAddress = true;
    }

    public addressFocus(): void {
        this.addressSearchInput.nativeElement.value = null;
        this.insertedAddress = false;
    }

    public addressBlur(): void {
        this.addressTouched = true;
    }
}
