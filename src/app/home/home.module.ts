import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoryBodyComponent } from './category-body/category-body.component';


@NgModule({
  declarations: [ 
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ]
})
export class HomeModule { }
