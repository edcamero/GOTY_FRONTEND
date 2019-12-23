import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica-horizontal',
  templateUrl: './grafica-horizontal.component.html',
  styleUrls: ['./grafica-horizontal.component.css']
})
export class GraficaHorizontalComponent {
  results: any[];


  view: any[] = [700, 400];

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

  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }
}