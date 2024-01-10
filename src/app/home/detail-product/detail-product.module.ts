import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductRoutingModule } from './detail-product-routing.module';
import { DetailProductComponent } from './detail-product.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    DetailProductRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],

})
export class DetailProductModule { }
