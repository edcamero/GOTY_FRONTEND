import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

import { of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  private juegos:Game[]=[];
  constructor(private http: HttpClient) { }

  getNominados(){
    if(this.juegos.length===0){
      console.log('desde internet');
      return this.http.get<Game[]>(`${environment.url}/game`)
      .pipe(
        tap(
          juegos=>this.juegos=juegos
        ));
    }else{
      console.log('desde caché');
      return of(this.juegos);
    }
   
  }


  votar(id:string){
  return this.http.post(`${environment.url}/game/`+id,{})
  .pipe(
    catchError(err=>{
      //console.log('Error en la petición');
      return of(err.error)
    })
  )

  }

  newGame(nameForm,urlForm){
    return this.http.post(`${environment.url}/game`,{name:nameForm,url:urlForm})
    .pipe(
      catchError(err=>{
        //console.log('Error en la petición');
        return of(err.error)
      })
    )
  }
}
