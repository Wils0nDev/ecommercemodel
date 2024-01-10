import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsSizesComponent } from './buttons-sizes/buttons-sizes.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';



@NgModule({
  declarations: [
    ButtonsSizesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    ImageModule,
    GalleriaModule,
    RadioButtonModule

  ],
  exports:[
    ButtonsSizesComponent,
    ButtonModule,
    CardModule,
    CarouselModule,
    TagModule,
    ImageModule,
    GalleriaModule,
    RadioButtonModule

  ]
  
})
export class ComponentsModule { }
