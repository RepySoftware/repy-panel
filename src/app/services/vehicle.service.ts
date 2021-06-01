import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Vehicle } from "../models/api/vehicle";
import { DepositOutput } from "../models/output/deposit.output";
import { VehicleOutput } from "../models/output/vehicle.output";
import { URLS } from "./urls";

@Injectable()
export class VehicleService {

    constructor(
        private _http: HttpClient
    ) { }

    public getAll(): Observable<Vehicle[]> {
        return this._http.get<Vehicle[]>(`${URLS.api.vehicles}`);
    }

    public getById(id: number): Observable<Vehicle> {
        return this._http.get<Vehicle>(`${URLS.api.vehicles}/${id}`);
    }

    public create(model: VehicleOutput): Observable<Vehicle> {
        return this._http.post<Vehicle>(`${URLS.api.vehicles}`, model);
    }

    public update(model: VehicleOutput): Observable<Vehicle> {
        return this._http.put<Vehicle>(`${URLS.api.vehicles}`, model);
    }
}