import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaHorizontalComponent } from './grafica-horizontal/grafica-horizontal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavbarComponent,GraficaHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,GraficaHorizontalComponent
  ]
})
export class ComponentsModule { }
