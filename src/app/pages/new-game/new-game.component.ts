import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/interfaces/interfaces';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
 name:string;
 url:string;

  constructor(private gameService :GameService) { }

  ngOnInit() {
    
  }


  AgregarJuego(){
    console.log("llegue a components new game ")
    this.gameService.newGame(this.name,this.url).subscribe(
      respuesta=>console.log(respuesta)
    );
  }
}
