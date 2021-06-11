import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { DeviceType } from '../../../enums/device-type';
import { Device } from '../../../models/api/device';
import { LoaderService } from '../../../services/loader.service';
import { TitleService } from '../../../services/title.service';
import { ToastService } from '../../../services/toast.service';
import { DevicesViewService } from '../devices-view.service';
import { DeviceMapMarker } from '../models/device-map-marker';

@Component({
  selector: 'app-devices-map',
  templateUrl: './devices-map.component.html',
  styleUrls: ['./devices-map.component.scss']
})
export class DevicesMapComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren(MapInfoWindow) infoWindowsView: QueryList<MapInfoWindow>;
  @ViewChild('map') public map: GoogleMap;

  public markers: DeviceMapMarker[] = [];

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

  public readonly refreshInterval = {
    interval: null,
    time: 3000
  };

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _devicesViewService: DevicesViewService,
    private _title: TitleService
  ) {
  }

  ngOnInit() {
    this._title.set('Dispositivos - Mapa')
  }

  ngAfterViewInit() {
    this.initDevicesData();
  }

  ngOnDestroy() {
    clearInterval(this.refreshInterval.interval);
  }

  private initDevicesData(): void {

    this._devicesViewService.refreshDevices({ showLoader: true }).then(devices => {

      devices.forEach(d => {

        this.markers.push({
          device: d,
          marker: {
            position: {
              lat: d.address.latitude,
              lng: d.address.longitude
            },
            title: d.name,
            label: {
              text: d.name,
              className: 'map-marker-label',
            },
            options: {
              icon: this.pinSymbol('blue')
            }
          }
        });
      });

      if (this._firstLoading && devices.length) {
        this.mapCenter = {
          lat: devices[0].address.latitude,
          lng: devices[0].address.longitude
        }

        this._firstLoading = false;
      }

    });
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
