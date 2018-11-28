import { Component, OnInit } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import { MatTabChangeEvent} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],

})
export class NavComponent implements OnInit {

  selectedIndex = 0;
  tabs = 3;

  constructor(private router: Router) { }

  ngOnInit() {
  }





  navigate (event: MatTabChangeEvent) {

    if (event.index === 0) {
      this.router.navigate(['today']);
    } else if (event.index === 1) {
      this.router.navigate(['hourly']);
    } else if (event.index === 2) {
      this.router.navigate(['tips']);
    }

  }


}
