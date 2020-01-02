import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {Game} from '../../interfaces/interfaces'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
juegos: any[]=[];
  constructor() { }

  

}
