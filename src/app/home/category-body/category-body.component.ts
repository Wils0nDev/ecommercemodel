import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-body',
  templateUrl: './category-body.component.html',
  styleUrls: ['./category-body.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CategoryBodyComponent implements OnInit {

  countCategory  = [0,1,2,3,4,5,6,7]
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  navigateUrl(url:string){
    this.router.navigateByUrl(url)
  }

}
