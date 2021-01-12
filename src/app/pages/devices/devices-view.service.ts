import { Injectable } from "@angular/core";
import { Device } from "../../models/api/device";
import { DeviceService } from "../../services/device.service";
import { LoaderService } from "../../services/loader.service";
import { ToastService } from "../../services/toast.service";

@Injectable()
export class DevicesViewService {

    public devices: Device[] = [];

    constructor(
        private _loader: LoaderService,
        private _toast: ToastService,
        private _deviceService: DeviceService
    ) { }

    public refreshDevices(options: { showLoader?: boolean } = {}): Promise<Device[]> {

        if (options.showLoader)
            this._loader.show();

        return new Promise<Device[]>((resolve, reject) => {
            this._deviceService.getDefault().subscribe(response => {

                if (options.showLoader)
                    this._loader.dismiss();

                this.devices = response;
                resolve(response);

            }, error => {

                if (options.showLoader)
                    this._loader.dismiss();

                this._toast.showError(error);

                reject(error);
            });
        });
    }
}