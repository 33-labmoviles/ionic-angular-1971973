import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnChanges {

  constructor() {}

  //(changes: SimpleChanges)
  ngOnChanges(): void {
    console.log("Cambio la vista")
    //Actualizar For
  }

  alumnos = [

    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABC123"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "ABC123"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC123"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "ABC123"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "ABC123"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC123"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ABC123"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "ABC123"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ABC123"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "ABC123"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ABC123"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
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

    this.alumnos.push(nuevoAlumno); //Agrega un nuevo alumno al arreglo

    //Ordenando elementos -- Por terminar
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

    console.log(this.alumnos); //Imprime en consola el nuevo alumno
  }

}
