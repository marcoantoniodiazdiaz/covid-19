import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  dias = [];
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  anos = [];

  constructor() {
    for (let i = 0; i < 31; i++) {
      this.dias.push(i + 1);
    }

    for (let i = 2020; i > 1910; i--) {
      this.anos.push(i);
    }
  }

  ngOnInit() {
  }

}
