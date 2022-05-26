import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges{

  constructor() {}

  //changes: SimpleChanges
  ngOnChanges(): void {
      //Actualizar Vista
  }

  alumnos = [
    {
      "nombre": "Pablo",
      "apellido": "Capistran",
      "matricula": "ABC123"
    },
    {
      "nombre": "Cristian",
      "apellido": "Juarez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Mario",
      "apellido": "Salazar",
      "matricula": "ABC123"
    },
    {
      "nombre": "Gerardo",
      "apellido": "Capistran",
      "matricula": "ABC123"
    },
    {
      "nombre": "Hugo",
      "apellido": "Sandoval",
      "matricula": "ABC123"
    },
    {
      "nombre": "Ana",
      "apellido": "Luna",
      "matricula": "ABC123"
    },
    {
      "nombre": "Diego",
      "apellido": "Martinez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Martinez",
      "matricula": "ABC123"
    }
  ];

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";


  
  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    }

    this.alumnos.push(nuevoAlumno); //Agrega elemento al arreglo

    //ordenar los elementos --- En proceso
    //this.alumnos.sort();
   this.alumnos.sort(function(a, b) {
    var nameA = a.nombre.toUpperCase(); 
    var nameB = b.nombre.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  });

    console.log(this.alumnos); //Imprimir en consola el nuevo arreglo
  }
}
