import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController,NavController} from '@ionic/angular';

@Component({
  selector: 'app-autenticarse',
  templateUrl: './autenticarse.page.html',
  styleUrls: ['./autenticarse.page.scss'],
})
export class AutenticarsePage implements OnInit {

  formularioAutenticarse: FormGroup;
  
  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioAutenticarse = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioAutenticarse.value;

    if(this.formularioAutenticarse.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario)); //se guarda de manera local en el navegador, localstorage
  }

}
