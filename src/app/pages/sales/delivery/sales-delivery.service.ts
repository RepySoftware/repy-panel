import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Delivery } from "../../../models/api/delivery";

@Injectable()
export class SalesDeliveryService {

    private _deliveries: Delivery[] = [];
    public deliveriesSubject: Subject<Delivery[]> = new Subject();

    public set deliveries(value: Delivery[]) {
        this._deliveries = value;
        this.deliveriesSubject.next(value);
    }

    public get deliveries(): Delivery[] {
        return this._deliveries;
    }
}