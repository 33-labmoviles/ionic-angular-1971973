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
      "matricula": "1548002"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "9874AD2"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "6321CCV"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "DD41001"
    },
    {
      "nombre": "Manuel",
      "apellido": "Juarez",
      "matricula": "SLFDMC10"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "5841DDC"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "63201FC"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "58741DA"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "MVNFH10"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "874410D"
    },
    {
      "nombre": "Dhalia",
      "apellido": "Tun",
      "matricula": "1582004"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "3065741"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "2058741"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "F1V0F2S"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "L03D6F7"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "D5S12VF4"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "RE4GRE5"
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
