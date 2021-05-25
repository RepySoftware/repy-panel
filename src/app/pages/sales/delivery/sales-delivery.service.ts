import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Delivery } from "../../../models/api/delivery";
import { EmployeeCoordinates } from "../../../models/api/employee-coordinates";

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

    private _employeesCoordinates: EmployeeCoordinates[] = [];
    public employeesCoordinatesSubject: Subject<EmployeeCoordinates[]> = new Subject();

    public set employeesCoordinates(value: EmployeeCoordinates[]) {
        this._employeesCoordinates = value;
        this.employeesCoordinatesSubject.next(value);
    }

    public get employeesCoordinates(): EmployeeCoordinates[] {
        return this._employeesCoordinates;
    }
}