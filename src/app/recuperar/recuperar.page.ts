import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  modeloPA: string;
  modeloPN: string;
  modeloCPN: string;
  modeloMensaje: string;

  nombre: string;
  pass: string;

  constructor(public rutaActiva: ActivatedRoute, public navController: NavController,
    public alertController: AlertController) {
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
    if(this.modeloPA === this.pass){
      if(this.modeloPN === this.modeloCPN){
        this.pass = this.modeloPN;
        this.navController.navigateRoot("login",{ queryParams: {'nombre': this.nombre, 'pass': this.pass} })
      }
      else{
        this.modeloMensaje = 'Debe ingresar la misma contraseña';
        //console.log("La contraseña debe ser la misma")
        this.mostrarAlerta();
      }
    }
    else{
      this.modeloMensaje = 'Contraseña incorrecta';
      //console.log("contraseña incorrecta")
      this.mostrarAlerta();
    }
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
