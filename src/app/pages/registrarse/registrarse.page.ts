import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from 'src/app/services/servicedatos.service'; //Datos es la interfaz
import { Platform, ToastController, IonList} from '@ionic/angular';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {



  


  

  datos: Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 



    

  constructor(private storageService: ServicedatosService, 
    private plt: Platform,private toastController: ToastController) { 
      this.plt.ready().then(()=>{
        this.loadDatos();
      });

      
    }

  ngOnInit() {
  }

 

  //leer datos
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });

  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();

  }

  //update

  updateDatos(dato: Datos ){

    dato.nombres = `UPDATED: ${dato.nombres}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos();
    });

  } 

  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

}
