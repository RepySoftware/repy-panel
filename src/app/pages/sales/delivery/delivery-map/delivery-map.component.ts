import { Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DeliveryType } from '../../../../enums/delivery-type';
import { AddressHelper } from '../../../../helpers/address.helper';
import { Delivery } from '../../../../models/api/delivery';
import { DeliveryMapMarker } from '../models/delivery-map-marker';
import { SalesDeliveryService } from '../sales-delivery.service';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import * as _ from 'lodash';
import { Employee } from '../../../../models/api/employee';
import { EmployeeCoordinates } from '../../../../models/api/employee-coordinates';

@Component({
  selector: 'app-delivery-map',
  templateUrl: './delivery-map.component.html',
  styleUrls: ['./delivery-map.component.scss']
})
export class DeliveryMapComponent implements OnInit {

  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;
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
    this._salesDeliveryService.deliveriesSubject.subscribe(deliveries => this.refreshDeliveriesMarkers(deliveries));
    this._salesDeliveryService.employeesCoordinatesSubject.subscribe(employeesCoordinates => this.refreshEmployeesMarkers(employeesCoordinates));
  }

  private refreshEmployeesMarkers(employeesCoordinates: EmployeeCoordinates[]): void {

    this.markers = this.markers.filter(m => m.delivery);

    employeesCoordinates.forEach(ec => {
      this.markers.push({
        employeeDriverCoordinates: ec,
        marker: {
          position: {
            lat: ec.latitude,
            lng: ec.longitude
          },
          options: {
            icon: this.pinSymbol(ec.color)
          }
        }
      });
    });
  }

  private refreshDeliveriesMarkers(deliveries: Delivery[]): void {

    this.markers = this.markers.filter(m => m.employeeDriverCoordinates);

    _(deliveries)
      .groupBy(d => d.employeeDriver?.id)
      .forEach(deliveriesByDriver => {
        deliveriesByDriver
          .filter(x => x.type == DeliveryType.saleOrder)
          .sort((a, b) => a.index - b.index)
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

    if (this._firstLoading && deliveries.filter(d => d.type == DeliveryType.saleOrder).length) {
      this.mapCenter = {
        lat: deliveries[0].saleOrder.deliveryAddress.latitude,
        lng: deliveries[0].saleOrder.deliveryAddress.longitude
      }

      this._firstLoading = false;
    }
  }

  public openInfoWindow(marker: MapMarker, index: number): void {
    const infoWindow = Array.from(this.infoWindowsView)[index];

    try {
      infoWindow.open({ getAnchor: () => marker.getAnchor() });
    } catch { }
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
