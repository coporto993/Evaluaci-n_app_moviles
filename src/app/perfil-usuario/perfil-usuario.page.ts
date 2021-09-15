import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  nombre: string;
  pass: string;
  
  constructor(public rutaActiva: ActivatedRoute, public navController: NavController) {
    this.rutaActiva.queryParams.subscribe(params => {
      this.nombre = params.nombre;
    })
    this.rutaActiva.queryParams.subscribe(params => {
      this.pass = params.pass;
    })
   }

  ngOnInit() {
  }

  volver() {
    this.navController.navigateRoot("login",{ queryParams: {'nombre': this.nombre, 'pass': this.pass} })
  }
  cambiarPass() {
    this.navController.navigateRoot("recuperar",{ queryParams: {'nombre': this.nombre, 'pass': this.pass} })
  }

}
