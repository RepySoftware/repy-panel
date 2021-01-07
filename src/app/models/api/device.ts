import { ApiModel } from "../abstraction/api-model";
import { TimeStamps } from "../abstraction/time-stamps";
import { Address } from "./address";
import { Supplier } from "./supplier";
import { DeviceGasLevel } from "./device-gas-level";
import { NotificationConfiguration } from "./notification-configuration";
import { DeviceType } from "../../enums/device-type";

export interface Device extends ApiModel, TimeStamps {

    deviceKey: string;
    token: string;
    name: string;
    address: Address;
    supplier: Supplier;
    type: DeviceType;
    notificationConfiguration: NotificationConfiguration;

    deviceGasLevel?: DeviceGasLevel;
}

export function deviceToHtml(device: Device): string {

    let html = '';

    html += /*html*/`<div>`;

    html += /*html*/`
        <span>${device.address.description}</span>
        <br>
        <strong>${device.name}</strong>
        <a style="float: right" class="btn btn-primary btn-sm" href="/devices/${device.id}/detail">Ver detalhes</a>
    `;

    switch (device.type) {
        case DeviceType.gasLevel:
            html += /*html*/`
                <strong>${device.deviceGasLevel.percentage}%</strong>
            `;
            break;
    }

    html += /*html*/`</div>`;

    return html;
}