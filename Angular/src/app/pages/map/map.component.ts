import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildMap();
  }

  buildMap() {
    // tslint:disable-next-line: no-shadowed-variable
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2luZ21hcmtkYyIsImEiOiJjand0aXoyYXAwMHVkNDhwaXJoYnBvZ2l2In0.J_eYWUikijSCsX_NuLUemA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // zoom: 15,
      // center: [20.348806, 20.12],
    });
  }

}
