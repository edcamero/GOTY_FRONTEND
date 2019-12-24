import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-horizontal',
  templateUrl: './grafica-horizontal.component.html',
  styleUrls: ['./grafica-horizontal.component.css']
})
export class GraficaHorizontalComponent implements OnDestroy {
  results: any[]=[
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 40
    }
    ,
    {
      "name": "Juego 4",
      "value": 10
    }
  ];


 

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'votos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  intervalo;
  constructor() {


    this.intervalo=setInterval(()=>{
      const newRerults=[...this.results]
      for (let i in newRerults){
        newRerults[i].value=Math.round(Math.random()*100);
      }


      this.results=[...newRerults]
    },1500);
    
  }

  onSelect(event) {
    console.log(event);
  }


  ngOnDestroy(){
    clearInterval(this.intervalo);
  }
}