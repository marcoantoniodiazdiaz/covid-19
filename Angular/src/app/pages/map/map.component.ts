import { Component, OnInit, enableProdMode } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  map: mapboxgl.Map;

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    // tslint:disable-next-line: no-shadowed-variable
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    (mapboxgl as any).accessToken = 'pk.eyJ1Ijoia2luZ21hcmtkYyIsImEiOiJjand0aXoyYXAwMHVkNDhwaXJoYnBvZ2l2In0.J_eYWUikijSCsX_NuLUemA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 4,
      // center: [20.348806, 20.12],
      center: [-101.25, 21.94],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
          // enableProdMode: true,
        },
        trackUserLocation: true
      })
    );
    this.map.setLayoutProperty('country-label', 'text-field', [
      'get',
      'name_' + 'spanish'
    ]);
  }

}
