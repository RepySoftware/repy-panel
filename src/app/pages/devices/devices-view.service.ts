import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Device } from "../../models/api/device";
import { DeviceService } from "../../services/device.service";

@Injectable()
export class DevicesViewService {

    public devices: Device[] = [];

    constructor(
        private _deviceService: DeviceService
    ) { }

    public getDevices(): Observable<Device[]> {
        return new Observable<Device[]>(observer => {
            this._deviceService.getDefault().subscribe(response => {
                this.devices = response;
                observer.next(response);
                observer.complete();
            }, error => observer.error(error));
        });
    }
}