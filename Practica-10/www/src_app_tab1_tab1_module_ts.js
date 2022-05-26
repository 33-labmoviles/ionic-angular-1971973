"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _alumnos_alumnos_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alumnos/alumnos.component.module */ 7829);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _alumnos_alumnos_component_module__WEBPACK_IMPORTED_MODULE_2__.AlumnosComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_Nueva_carpeta_10_Nueva_carpeta_ionic_angular_1FM045_practica9_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab1Page = class Tab1Page {
    constructor() {
        this.alumnos = [
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
        this.nombre = "";
        this.apellido = "";
        this.matricula = "";
    }
    //changes: SimpleChanges
    ngOnChanges() {
        //Actualizar Vista
    }
    agregarAlumno() {
        var nuevoAlumno = {
            "nombre": this.nombre,
            "apellido": this.apellido,
            "matricula": this.matricula
        };
        this.alumnos.push(nuevoAlumno); //Agrega elemento al arreglo
        //ordenar los elementos --- En proceso
        //this.alumnos.sort();
        this.alumnos.sort(function (a, b) {
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
};
Tab1Page.ctorParameters = () => [];
Tab1Page.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    apellido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    matricula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tab1',
        template: _D_Nueva_carpeta_10_Nueva_carpeta_ionic_angular_1FM045_practica9_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Asistencia de alumnos</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-grid>\n \n  <ion-row  *ngFor=\"let alumno of alumnos\">\n   <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>Nombre:</ion-col>\n                  <ion-col><strong>{{alumno.nombre}}</strong></ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>Apellido:</ion-col>\n                  <ion-col><strong>{{alumno.apellido}}</strong></ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>Matricula:</ion-col>\n                  <ion-col><strong>{{alumno.matricula}}</strong></ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-col>\n            <ion-col class=\"alumno-foto\">\n              <img src=\"assets/imagenes/giga.png\" alt=\"\" width=\"150px\">\n            </ion-col>\n          </ion-row>\n         \n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n   </ion-col>\n \n  </ion-row>\n</ion-grid>\n  \n</ion-content>\n");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".alumno-foto {\n  text-align: right;\n}\n\n.campo-texto {\n  border: solid 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWx1bW5vLWZvdG8ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2FtcG8tdGV4dG8ge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map