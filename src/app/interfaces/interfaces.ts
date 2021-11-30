import { SchemaMetadata } from "@angular/compiler";


export interface RespuestaToHeadLines {
  page:number;
  results:Resultados[];
}

export interface Resultados{
  adult:string;
  backdrop_path:string;
  genre_ids:number;
  id:number;
  original_language:string;
  original_title:string;
  overview:string;
  popularity:number;
  poster_path:string;
  release_date:string;
  title:string;
  video:string;
  vote_average:number;
  vote_count:number;

}