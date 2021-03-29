import { Injectable } from "@angular/core";
import { Device } from "../../../models/api/device";
import { DeviceService } from "../../../services/device.service";
import { LoaderService } from "../../../services/loader.service";
import { ToastService } from "../../../services/toast.service";

@Injectable()
export class DeviceDetailsService {

    public deviceId: number;
    public device: Device;

    constructor(
        private _loader: LoaderService,
        private _toast: ToastService,
        private _deviceService: DeviceService
    ) { }

    public getDevice(options: { id?: number, showLoader?: boolean } = { id: this.deviceId }): Promise<Device> {

        return new Promise((resolve, reject) => {
            if (options.showLoader)
                this._loader.show();

            this._deviceService.getById(options.id).subscribe(response => {

                if (options.showLoader)
                    this._loader.dismiss();

                this.device = response;
                this.deviceId = response.id;

                resolve(this.device);
            }, error => {
                if (options.showLoader)
                    this._loader.dismiss();

                this._toast.showHttpError(error);

                reject(error);
            });
        });
    }
}