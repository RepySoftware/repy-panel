import { Delivery } from "../../../../models/api/delivery";
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps'

export interface DeliveryMapMarker {
    delivery: Delivery;
    marker: {
        title?: string;
        label?: google.maps.MarkerLabel;
        position: { lat: number, lng: number }
        options?: google.maps.MarkerOptions
    }
}