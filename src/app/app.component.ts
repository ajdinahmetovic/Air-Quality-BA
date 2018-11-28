import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rss} from './dataStruct/rss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AIR-APP-MD';
  rssFeed: Rss;

  constructor (private http: HttpClient) {

    this.rssFeed = new Rss(http);

  }
}
