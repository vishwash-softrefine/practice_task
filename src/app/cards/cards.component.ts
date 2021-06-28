import { Component, OnInit } from '@angular/core';
import { Card, cardata } from '../datas/carddata';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  getcarddata: Card[] = [];
  constructor() {
    this.getcarddata = cardata;
    // console.log(this.getcarddata);
    // this.newadata = cardata.map((data) => {
    //   return {
    //     cid: data.id,
    //     name: data.name,
    //     bgimg: data.bgImg,
    //     btntext: data.btnText,
    //   };
  }
  ngOnInit(): void {}
}
