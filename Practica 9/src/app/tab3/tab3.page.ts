import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';

import { Alumno } from '../alumno';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private db: DatabaseService
  ) {}

  nuevoAlumno: Alumno;

  nombre: string ="";
  apellido: string ="";
  matricula: string ="";

  //modelo = new Alumno( this.nombre, this.apellido, this.matricula);

  onSubmit(agregarAlumno: NgForm) {
    //Algo aqui
    console.log("Submit");

    this.nuevoAlumno = {
      nombre: this.nombre, 
      apellido: this.apellido, 
      matricula: this.matricula
    }

    this.db.agregarAlumno(this.nuevoAlumno).subscribe(res => {
      console.log("Se agrego correctamente")
    })
    //AQUI VA EL REQUEST
  }

}
