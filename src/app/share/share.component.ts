import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {AppComponent} from '../app.component';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  rssFeed: Rss;
  constructor(private bottomSheetRef: MatBottomSheetRef<ShareComponent>, private http: HttpClient) {
    this.rssFeed = new Rss(http);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
  }

}
