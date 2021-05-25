import { Delivery } from "../../../../models/api/delivery";
import { EmployeeCoordinates } from "../../../../models/api/employee-coordinates";

export interface DeliveryMapMarker {
    delivery?: Delivery;
    employeeDriverCoordinates?: EmployeeCoordinates;
    marker: {
        title?: string;
        label?: google.maps.MarkerLabel;
        position: { lat: number, lng: number }
        options?: google.maps.MarkerOptions
    }
}