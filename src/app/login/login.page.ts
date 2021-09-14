import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  modeloUsuario: string;
  modeloPass: string;

  constructor() { }

  ngOnInit() {
  }

  validarLogin() {
    if(this.modeloUsuario === 'user' && this.modeloPass === 'admin'){

    }
    else {
      
    }
  }

}
