import { Device } from "../../../models/api/device";

export interface DeviceMapMarker {
    device?: Device;
    marker: {
        title?: string;
        label?: google.maps.MarkerLabel;
        position: { lat: number, lng: number }
        options?: google.maps.MarkerOptions
    }
}