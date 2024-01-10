import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';
import { CardModule } from 'primeng/card';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { ProductCategoryRoutingModule } from './product-category.routing.module';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ComponentsModule,
    RouterModule,
    ProductCategoryRoutingModule,
    CarouselModule,
    TagModule
  ]
})
export class ProductCategoryModule { }
