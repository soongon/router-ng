import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-ng';

  userId = '3';

  constructor(private router: Router) {}

  goTwo() {
    this.router.navigate(['two']);
  }
}
