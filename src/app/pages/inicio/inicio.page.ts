import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, NavController  } from '@ionic/angular';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  

constructor(private menuController: MenuController, public alertController: AlertController,
  public navCtrl: NavController) { }

ngOnInit() {
}

 mostrarMenu(){
  this.menuController.open('first');
  
}
  


async salir(){
  const alert = await this.alertController.create({
    header: 'Salir',
    message: '¿Deberitas te quieres salir?',
    buttons: [
      {
        text: 'No mejor no',
        handler: () => {
          
        }
      }, {
        text: 'Sii',
        handler: () => {
          localStorage.removeItem('ingresado');
          this.navCtrl.navigateRoot('login');
        }
      }
    ]
  });

  await alert.present();
}

 
}

