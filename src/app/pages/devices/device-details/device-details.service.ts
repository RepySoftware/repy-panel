import { Injectable } from "@angular/core";
import { Device } from "../../../models/api/device";
import { DeviceService } from "../../../services/device.service";
import { LoaderService } from "../../../services/loader.service";
import { ToastService } from "../../../services/toast.service";

@Injectable()
export class DeviceDetailsService {

    public deviceKey: string;
    public device: Device;

    constructor(
        private _loader: LoaderService,
        private _toast: ToastService,
        private _deviceService: DeviceService
    ) { }

    public getDevice(options: { deviceKey?: string, showLoader?: boolean } = { deviceKey: this.deviceKey }): Promise<Device> {

        return new Promise((resolve, reject) => {
            if (options.showLoader)
                this._loader.show();

            this._deviceService.getByKey(options.deviceKey).subscribe(response => {

                if (options.showLoader)
                    this._loader.dismiss();

                this.device = response;
                this.deviceKey = response.deviceKey;

                resolve(this.device);
            }, error => {
                if (options.showLoader)
                    this._loader.dismiss();

                this._toast.showError(error);

                reject(error);
            });
        });
    }
}