import {Component, Input, OnInit} from '@angular/core';
import {Rss} from '../dataStruct/rss';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() rssFeed: Rss;
  constructor() {
    // this.rssFeed = new Rss(this.http);

  }

  ngOnInit() {
  }

  getColor (arg): string {
    switch (arg) {
      case 'Good': {
        return '#1aff66';
      }

      case 'Moderate': {
        return '#ffd11a';
      }



      case 'Unhealthy for Sensitive Groups': {
        return '#ff8c1a';
      }

      case 'Unhealthy': {
        return '#ff1a1a';
      }

      case 'Very Unhealthy': {
        return '#990000';
      }

      case 'Hazardous': {
        return '#800080';
      }
    }
  }

}
