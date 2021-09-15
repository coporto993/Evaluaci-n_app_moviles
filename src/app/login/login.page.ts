import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  alertController: AlertController;
  modeloUsuario: string;
  modeloPass: string;

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

  validarLogin() {
    if(this.modeloUsuario === 'thomas' && this.modeloPass === 'admin'){
      console.log("ingreso correcto");
      //ingreso a página
      this.navController.navigateRoot("perfil-usuario",{ queryParams: {'nombre': this.modeloUsuario} })
    }
    else {
      console.log("usuario y/o contraseña incorrecto");
      //Alerta

    }
  }

}
