import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaHorizontalComponent } from './grafica-horizontal/grafica-horizontal.component';



@NgModule({
  declarations: [NavbarComponent,GraficaHorizontalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,GraficaHorizontalComponent
  ]
})
export class ComponentsModule { }
