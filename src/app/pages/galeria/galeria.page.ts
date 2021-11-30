import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
//import {Article} from '../../interfaces/interfaces'; api antigua
import {Resultados} from '../../interfaces/interfaces';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  peliculas:Resultados[]=[]
  constructor(private peliculasService:PeliculasService) { }

  ngOnInit() {

    this.peliculasService.getToHeadLines().subscribe(resp=>{
      console.log('peliculas',resp);
      //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio.
      this.peliculas.push(...resp.results);
     
    });
  }

  
}

