import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  CategoryBodyComponent } from './category-body.component';


const routes: Routes = [
  { path: '', component: CategoryBodyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CategoryBodyRoutingModule {}
