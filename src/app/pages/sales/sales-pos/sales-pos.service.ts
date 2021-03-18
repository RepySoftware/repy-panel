import { Injectable } from "@angular/core";
import { Person } from "../../../models/api/person";
import { SalesPosPurchaseOrderProduct } from "../models/sales-pos-purchase-order-item";

@Injectable()
export class SalesPosService {

    public personCustomer: Person;

    public products: SalesPosPurchaseOrderProduct[] = [];

    public driver: Person;
}