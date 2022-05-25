import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}



  personas = [
    {
      "nombre": "Pablo",
      "apellidos": "Capistran",
      "matricula": "1971973",
      "image": "assets/images/cano.png"
    },
    {
      "nombre": "Cristian",
      "apellidos": "Juarez",
      "matricula": "1241241",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Mario",
      "apellidos": "Salazar",
      "matricula": "17546432",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Gerardo",
      "apellidos": "Capistran",
      "matricula": "2141252",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Hugo",
      "apellidos": "Sandoval",
      "matricula": "1957377",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Ana",
      "apellidos": "Luna",
      "matricula": "214123234",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Diego",
      "apellidos": "Martinez",
      "matricula": "12412553",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Alma",
      "apellidos": "Luna",
      "matricula": "1979772",
      "image": "assets/images/giga.png"
    },
    {
      "nombre": "Ricardo",
      "apellidos": "Martinez",
      "matricula": "17543432",
      "image": "assets/images/giga.png"
    }
  ];
}
