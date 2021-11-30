import { Component } from '@angular/core';


interface componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  componentes : componente[] = [

    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'

    },

    {
      icon: 'film-outline',
      name: 'Galeria',
      redirecTo: '/galeria'

    },

    {
      icon: 'reader-outline',
      name: 'Sugerencias y reclamos',   
      redirecTo: '/registrarse'

    },

    

    

    

  ];

  constructor() {}
}
