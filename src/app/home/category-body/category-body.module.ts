import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryBodyComponent } from './category-body.component';
import { CardModule } from 'primeng/card';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule } from '@angular/router';
import { CategoryBodyRoutingModule } from './category-body.routing.module';


@NgModule({
  declarations: [CategoryBodyComponent],
  imports: [
    CommonModule,
    CardModule,
    ComponentsModule,
    RouterModule,
    CategoryBodyRoutingModule

  ]
})
export class CategoryBodyModule { }
