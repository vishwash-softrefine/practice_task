import { Component, Input, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images = [
    '../../assets/img/main__slider01.png',
    '../../assets/img/main__slider01.png',
  ];

  @Output() newItemEvent = new EventEmitter<string>();

  fontSize = 16;
  desc() {
    this.fontSize = this.fontSize - 1;
  }
  inc() {
    this.fontSize = this.fontSize + 1;
  }
  reset() {
    this.fontSize = 16;
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
