import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaHorizontalComponent } from './grafica-horizontal/grafica-horizontal.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [NavbarComponent,GraficaHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  exports:[
    NavbarComponent,GraficaHorizontalComponent
  ]
})
export class ComponentsModule { }
