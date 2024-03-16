import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-medianews',
  templateUrl: './medianews.component.html',
  styleUrls: ['./medianews.component.css']
})
export class MedianewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i> '],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
