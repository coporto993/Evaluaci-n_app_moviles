import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  modeloUsuario: string;
  modeloPass: string;
  modeloCPass: string;
  modeloMensaje: string;

  constructor(public navController: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }
  validarRegistro() {
    if(this.modeloPass === this.modeloCPass){
      console.log("Registro correcto");
      //ingreso a página
      this.navController.navigateRoot("login",{ queryParams: {'nombre': this.modeloUsuario, 'pass': this.modeloPass} })
    }
    else {
      this.modeloMensaje = 'Debe ingresar la misma contraseña';
      //console.log("Debe ingresar la misma contraseña");
      //Alerta
      this.mostrarAlerta();
    }
  }

  volver(){
    this.navController.navigateRoot("inicio")
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
