import { EventEmitter } from "@angular/core";
import { AddressConfig } from "../../models/others/address-config";

export class AddressConfigService {

    public setFormValuesEmitter: EventEmitter<void> = new EventEmitter();

    public address: AddressConfig;

    public setFormValues(): void {
        this.setFormValuesEmitter.emit();
    }
}