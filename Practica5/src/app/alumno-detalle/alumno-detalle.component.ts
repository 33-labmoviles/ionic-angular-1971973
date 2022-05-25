import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }

   //ALUMNOS
   alumnos = [

    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "ABC123",
      "imagen": "assets/imagenes/giga.png"
    }
  ];

  alumnoDetalle: any = {}
  matricula: string = this.ruta.snapshot.params.id;
  obtenerDetalleAlumno(matricula): any {
    console.log(matricula);

    //Busca en arreglo el alumno y regresa la matricula
    for(let i = 0; i < this.alumnos.length; i++){
      if(matricula == this.alumnos[i].matricula){
        this.alumnoDetalle = this.alumnos[i];
      }
    }

    return this.alumnos;
  }

}
