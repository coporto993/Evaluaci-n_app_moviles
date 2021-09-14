import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alertController: AlertController;
  modeloUsuario: string;
  modeloPass: string;

  constructor() { }

  ngOnInit() {
  }

  validarLogin() {
    if(this.modeloUsuario === 'user' && this.modeloPass === 'admin'){
      console.log("ingreso correcto");
    }
    else {
      console.log("usuario y/o contraseña incorrecto");

    }
  }

}
