import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  today: Date;
  money: number;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.money = 12525000;
  }

}
