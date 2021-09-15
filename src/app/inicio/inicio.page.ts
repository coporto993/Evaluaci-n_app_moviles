import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre: string;
  pass: string;

  constructor(public navController: NavController, public rutaActiva: ActivatedRoute) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      this.nombre = params.nombre;
    })
    this.rutaActiva.queryParams.subscribe(params =>{
      this.pass = params.pass;
    })
  }

  ngOnInit() {
  }

  iniciarSesion() {
    this.navController.navigateRoot('login',{queryParams:{'nombre': this.nombre, 'pass': this.pass}});
  }
  registrarse() {
    this.navController.navigateRoot('registro');
  }

}
