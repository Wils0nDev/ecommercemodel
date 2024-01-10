import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryBodyComponent } from './category-body/category-body.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      { path: '', redirectTo: 'category-body', pathMatch: 'full' },
      {
        path:'category-body',
        loadChildren: ()=>
        import('./category-body/category-body.module')
        .then(m=>m.CategoryBodyModule)
      },
      {
        path:'product-category',
        loadChildren: ()=>
        import('./product-category/product-category.module')
        .then(m=>m.ProductCategoryModule)
      },
      {
        path:'detail-product',
        loadChildren: ()=>
        import('./detail-product/detail-product.module')
        .then(m=>m.DetailProductModule)
      },
  

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
