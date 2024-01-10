import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/model/product';
import { ProductserviceService } from 'src/app/shared/service/productservice.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions: any[] = [];

  constructor(
     private productService: ProductserviceService
     ) { }

  ngOnInit(): void {

    this.productService.getProductsSmall().then((products) => {
      this.products = products;
  });

  this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}
  

  getSeverity(status: string) : string {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default :
          return '';
    }
  }

}
