import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheet: ActionSheetController) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }

   //ALUMNOS
   alumnos = [

    {
      "nombre": "Abraham",
      "apellido": "Ramirez",
      "matricula": "1548002",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Aylin",
      "apellido": "Demecti",
      "matricula": "9874AD2",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "6321CCV",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Diego",
      "apellido": "Davila",
      "matricula": "DD41001",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Manuel",
      "apellido": "Juarez",
      "matricula": "SLFDMC10",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Julio",
      "apellido": "Luevano",
      "matricula": "5841DDC",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Armando",
      "apellido": "Villanueva",
      "matricula": "63201FC",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Otoniel",
      "apellido": "Tamez",
      "matricula": "58741DA",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Rogel Axel",
      "apellido": "Guel",
      "matricula": "MVNFH10",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutierrez",
      "matricula": "874410D",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Dhalia",
      "apellido": "Tun",
      "matricula": "1582004",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Bryan",
      "apellido": "Castillo",
      "matricula": "3065741",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Ricardo",
      "apellido": "Rocha",
      "matricula": "2058741",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Emiliano",
      "apellido": "Rodriguez",
      "matricula": "F1V0F2S",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Luis Enrique",
      "apellido": "Martinez Galvan",
      "matricula": "L03D6F7",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Enrique",
      "apellido": "Santillan",
      "matricula": "D5S12VF4",
      "imagen": "assets/imagenes/giga.png"
    },
    {
      "nombre": "Juan Antonio",
      "apellido": "Torres Lozano",
      "matricula": "RE4GRE5",
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

  async mostrarActionSheet() {
    //Mostrar el Action Sheet
    const actionSheet = await this.actionSheet.create({
      header: 'Opciones',
      cssClass: 'primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
