import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-search-bib',
  templateUrl: './search-bib.page.html',
  styleUrls: ['./search-bib.page.scss'],
})
export class SearchBibPage implements OnInit, OnDestroy {

  map: Leaflet.Map;

  constructor(private geolocation: Geolocation) { }

  ngOnDestroy(): void {
    this.map.remove();
  }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.geolocation.getCurrentPosition().then(data => {
      this.map = Leaflet.map('mapId').setView([data.coords.latitude, data.coords.longitude], 12);
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'edupala.com © Angular LeafLet',
      }).addTo(this.map);
    });

  }

}
