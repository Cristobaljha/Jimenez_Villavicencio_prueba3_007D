//es el servi para la api
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})


export class PeliculasService {

  constructor( private http:HttpClient) { }

  getToHeadLines()
{
  return this.http.get<RespuestaToHeadLines>('https://api.themoviedb.org/3/movie/popular?api_key=369efd64a83a49ff2a4109814790b2df');

}

  

  
}


