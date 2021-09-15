import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  public nombre: string;
  
  constructor(public rutaActiva: ActivatedRoute) {
    this.rutaActiva.queryParams.subscribe(params => {
      this.nombre = params.nombre;
    })
   }

  ngOnInit() {
  }

}
