import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  imgSrc = 'http://image14.coupangcdn.com/image/product/image/vendoritem/2018/09/17/100000001775/ff84cc27-11c8-4181-b6fa-e6a10b28eb37.jpg';

  constructor() { }

  ngOnInit() {
  }

}
