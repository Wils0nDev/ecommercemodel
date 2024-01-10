import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/model/product';
import { PhotoService } from 'src/app/shared/service/photo.service';
import { ProductserviceService } from 'src/app/shared/service/productservice.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  products: Product[] = [];
  responsiveOptions: any[] = [];

  images: any[] = [];

  position: string = 'buttom';
  positionOptions: any[] = [
    {
      label: 'Right',
      value: 'right',
    },
  ];

 
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => (this.images = images));

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
