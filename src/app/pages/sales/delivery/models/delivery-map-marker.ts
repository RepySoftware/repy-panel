import { Delivery } from "../../../../models/api/delivery";
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'
import { Employee } from "../../../../models/api/employee";

export interface DeliveryMapMarker {
    delivery?: Delivery;
    employeeDriver?: Employee;
    marker: {
        title?: string;
        label?: google.maps.MarkerLabel;
        position: { lat: number, lng: number }
        options?: google.maps.MarkerOptions
    }
}