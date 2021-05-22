import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DeliveryType } from '../../../../enums/delivery-type';
import { AddressHelper } from '../../../../helpers/address.helper';
import { Delivery } from '../../../../models/api/delivery';
import { DeliveryMapMarker } from '../models/delivery-map-marker';
import { SalesDeliveryService } from '../sales-delivery.service';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import * as _ from 'lodash';

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

    _(deliveries)
      .groupBy(d => d.employeeDriver.id)
      .forEach(deliveriesByDriver => {
        deliveriesByDriver
          .filter(x => x.type == DeliveryType.saleOrder)
          .forEach((d, i) => {
            this.markers.push({
              delivery: d,
              marker: {
                position: {
                  lat: d.saleOrder.deliveryAddress.latitude,
                  lng: d.saleOrder.deliveryAddress.longitude
                },
                title: `#${d.saleOrder.id}`,
                label: {
                  text: (i + 1).toString(),
                  className: 'map-marker-label',
                },
                options: {
                  icon: this.pinSymbol(d.saleOrder.employeeDriver?.color || '#000')
                }
              }
            });
          });
      });

    // deliveries
    //   .filter(d => d.type == DeliveryType.saleOrder)
    //   .forEach(d => {
    //     this.markers.push({
    //       delivery: d,
    //       marker: {
    //         position: {
    //           lat: d.saleOrder.deliveryAddress.latitude,
    //           lng: d.saleOrder.deliveryAddress.longitude
    //         },
    //         title: `#${d.saleOrder.id}`,
    //         label: {
    //           text: (d.index + 1).toString(),
    //           className: 'map-marker-label',
    //         },
    //         options: {
    //           icon: this.pinSymbol(d.saleOrder.employeeDriver?.color || '#000')
    //         }
    //       }
    //     });
    //   });

    if (this._firstLoading) {
      this.mapCenter = {
        lat: deliveries[0].saleOrder.deliveryAddress.latitude,
        lng: deliveries[0].saleOrder.deliveryAddress.longitude
      }

      this._firstLoading = false;
    }
  }

  private pinSymbol(color: string): google.maps.Symbol {
    return {
      path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#444',
      strokeWeight: 1,
      scale: 1
    };
  }
}
