import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
import { Device, deviceToHtml } from '../../../models/api/device';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { DevicesViewService } from '../devices-view.service';

@Component({
  selector: 'app-devices-map',
  templateUrl: './devices-map.component.html',
  styleUrls: ['./devices-map.component.scss']
})
export class DevicesMapComponent implements OnInit, AfterViewInit, OnDestroy {

  public readonly devicesMapId = 'devicesMap';

  public readonly refreshInterval = {
    interval: null,
    time: 3000
  };

  private _map: mapboxgl.Map;

  private _markers: {
    id: any,
    popup: mapboxgl.Popup,
    marker: mapboxgl.Marker,
    html: string
  }[] = [];

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _devicesViewService: DevicesViewService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
    this.initDevicesData();
  }

  ngOnDestroy() {
    clearInterval(this.refreshInterval.interval);
  }

  private initMap(): void {
    this._map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: this.devicesMapId,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-53.8530664, -29.8264536],
      zoom: 6
    });

    this._map.addControl(new mapboxgl.NavigationControl());
  }

  private initDevicesData(): void {

    this._devicesViewService.refreshDevices({ showLoader: true }).then(devices => {
      devices.forEach(d => {

        this.createMarker({
          id: `deviceMarker_${d.id}`,
          lngLat: [d.address.longitude, d.address.latitude],
          html: this.buildMarkerHtml(d)
        });

      });

      window.addEventListener('wheel', e => {
        this._markers.forEach(x => {
          // if (x.popup.isOpen())
          //   x.popup._onClickClose();
        });
      });

      const bounds = new mapboxgl.LngLatBounds();
      this._markers.forEach(x => bounds.extend(x.marker.getLngLat()));
      this._map.fitBounds(bounds, { padding: 100 });

      // this.refreshInterval.interval = setInterval(() => {
      //   this._devicesViewService.refreshDevices().then(devices => {
      //     devices.forEach(d => {
      //       const marker = this._markers.find(x => x.id == `deviceMarker_${d.id}`);
      //       marker.popup.setHTML(this.buildMarkerHtml(d));
      //     });
      //   });
      // }, this.refreshInterval.time);
    });
  }

  private buildMarkerHtml(device: Device): string {
    return deviceToHtml(device);
  }

  private createMarker(options: {
    id: string;
    lngLat: [number, number];
    html: string;
  }): void {
    const popup = new mapboxgl.Popup({ maxWidth: '320px' })
      .setLngLat(options.lngLat)
      .setHTML(options.html);

    const el = document.createElement('div');
    el.style.background = 'var(--primary-color)';
    el.style.width = '20px';
    el.style.height = '20px';
    el.style.borderRadius = '50%';
    el.style.cursor = 'pointer';

    const marker = new mapboxgl.Marker(el)
      .setLngLat(options.lngLat)
      .setPopup(popup)
      .addTo(this._map);

    const markerElement = marker.getElement();
    markerElement.id = options.id;

    // markerElement.addEventListener('mouseover', e => {
    //   if (!popup.isOpen()) {
    //     this._markers.forEach(x => x.popup._onClickClose());
    //     marker.togglePopup();
    //   }
    // });

    //markerElement.addEventListener('mouseout', e => {
    //    marker.togglePopup();
    //});

    this._markers.push({
      id: options.id,
      popup,
      marker,
      html: options.html
    });
  }

}
