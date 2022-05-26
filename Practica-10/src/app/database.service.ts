import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  //get
  

  //POST

  agregarAlumno(nuevoAlumno: any) {
    return this.http.post('https://labp9-afb8a-default-rtdb.firebaseio.com/alumnos.json', nuevoAlumno)
  }

  detalleAlumno(id: string){
    return this.http.get('https://labp9-afb8a-default-rtdb.firebaseio.com/alumnos/'+ id + '.json')
  }

}
