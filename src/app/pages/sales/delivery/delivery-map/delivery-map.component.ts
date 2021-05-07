import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DeliveryType } from '../../../../enums/delivery-type';
import { AddressHelper } from '../../../../helpers/address.helper';
import { Delivery } from '../../../../models/api/delivery';
import { DeliveryMapMarker } from '../models/delivery-map-marker';
import { SalesDeliveryService } from '../sales-delivery.service';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.scss']
})
export class DeliveryMapComponent implements OnInit {

  @ViewChild('map') public map: GoogleMap;

  public mapZoom = 12;

  public mapCenter: google.maps.LatLngLiteral;

  public mapOptions: google.maps.MapOptions = {
    // mapTypeId: 'hybrid',
    // zoomControl: false,
    // scrollwheel: false,
    // disableDoubleClickZoom: true,
    // maxZoom: 15,
    // minZoom: 8,
  }

  private _firstLoading = true;

  public markers: DeliveryMapMarker[] = [];

  constructor(
    private _salesDeliveryService: SalesDeliveryService
  ) { }

  ngOnInit(): void {
    this._salesDeliveryService.deliveriesSubject.subscribe(deliveries => this.refreshMarkers(deliveries));
  }

  private refreshMarkers(deliveries: Delivery[]): void {

    this.markers = [];

    deliveries
      .filter(d => d.type == DeliveryType.saleOrder)
      .forEach(d => {
        this.markers.push({
          delivery: d,
          marker: {
            position: {
              lat: d.saleOrder.deliveryAddress.latitude,
              lng: d.saleOrder.deliveryAddress.longitude
            },
            title: `#${d.saleOrder.id}`,
            label: {
              text: (d.index + 1).toString(),
              className: 'map-marker-label',
              color: d.saleOrder.employeeDriver?.color || '#000'
            }
          }
        });
      });

    if (this._firstLoading) {
      this.mapCenter = {
        lat: deliveries[0].saleOrder.deliveryAddress.latitude,
        lng: deliveries[0].saleOrder.deliveryAddress.longitude
      }

      this._firstLoading = false;
    }
  }

}
