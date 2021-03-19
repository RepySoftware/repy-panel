import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { environment } from "../../../../environments/environment";
import { Employee } from "../../../models/api/employee";
import { Person } from "../../../models/api/person";
import { SalesPosPurchaseOrderProduct } from "../models/sales-pos-purchase-order-item";

@Injectable()
export class SalesPosService {

    constructor(
        private _sanitizer: DomSanitizer
    ) { }

    private _personCustomer: Person;

    public products: SalesPosPurchaseOrderProduct[] = [];

    public employeeDriver: Employee;

    public tabsOk = {
        customer: () => !!this.personCustomer,
        products: () => this.products.length > 0,
        delivery: () => false,
        payment: () => false
    }

    public deliveryAddressMapUrl: SafeResourceUrl;

    public get personCustomer(): Person {
        return this._personCustomer;
    }

    public set personCustomer(value: Person) {
        this._personCustomer = value;
        this.deliveryAddressMapUrl = this.addressToMapUrl(this._personCustomer.address.description);
    }

    private addressToMapUrl(address: string): SafeResourceUrl {

        let url = `https://www.google.com/maps/embed/v1/search`;

        url += `?key=${environment.googleMaps.embedApiKey}`;
        url += `&q=${address}`;

        return this._sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}