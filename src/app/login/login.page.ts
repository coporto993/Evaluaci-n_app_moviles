import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string;
  modeloPass: string;
  nombre: string;
  pass: string;
  modeloMensaje: string;

  constructor(public navController: NavController, public rutaActiva: ActivatedRoute,
    public alertController: AlertController) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      this.nombre = params.nombre;
    })
    this.rutaActiva.queryParams.subscribe(params =>{
      this.pass = params.pass;
    })
  }

  ngOnInit() {
  }

  validarLogin() {
    if(this.modeloUsuario === this.nombre && this.modeloPass === this.pass){
      console.log("ingreso correcto");
      //ingreso a página
      this.navController.navigateRoot("perfil-usuario",{ queryParams: {'nombre': this.modeloUsuario, 'pass': this.modeloPass} })
    }
    else {
      this.modeloMensaje = 'usuario y/o contraseña incorrecto';
      //console.log("usuario y/o contraseña incorrecto");
      //Alerta
      this.mostrarAlerta();
    }
    
    
  }
  volver() {
    this.navController.navigateRoot("inicio",{ queryParams: {'nombre': this.nombre, 'pass': this.pass} })
  }
  
  mostrarAlerta() {
    this.presentAlert();
  }
  
  
  
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atencion',
      message: this.modeloMensaje,
      buttons: ['OK']

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  
  }
}