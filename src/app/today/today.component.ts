import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {AppComponent} from '../app.component';
import {MatBottomSheet} from '@angular/material';
import {ShareComponent} from '../share/share.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  date: Date = new Date();
  rssFeed: Rss ;

  constructor(private bottomSheet: MatBottomSheet, private app: AppComponent) {
    this.rssFeed = app.rssFeed;
  }

  ngOnInit() {
  }

  openShareDialog() {
     this.bottomSheet.open(ShareComponent);
  }

  getShape (arg): string {
    switch (arg) {
      case 'Good': {
        return 'src/assets/e_good.svg';
      }

      case 'Moderate': {
        return 'src/assets/e_moderate.svg';
      }

      case 'Unhealthy for Sensitive Groups': {
        return 'src/assets/e_unhealthyforsensgroups.svg';
      }

      case 'Unhealthy': {
        return 'src/assets/e_unhealthy.svg';
      }

      case 'Very Unhealthy': {
        return 'src/assets/e_veryunhealthy.svg';
      }

      case 'Hazardous': {
        return 'src/assets/e_hazardous.svg';
      }
    }
  }

  getMessage (): string {
    switch (this.rssFeed.getLatestStatus()) {
      case 'Good': {
        return 'Air quality is considered satisfactory, and air pollution poses little or no risk.';
      }

      case 'Moderate': {
        return 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.';
      }

      case 'Unhealthy for Sensitive Groups': {
        return 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.';
      }

      case 'Unhealthy': {
        return 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.';
      }

      case 'Very Unhealthy': {
        return 'Health warnings of emergency conditions. The entire population is more likely to be affected.';
      }

      case 'Hazardous': {
        return 'Health alert: everyone may experience more serious health effects.';
      }
    }
  }

}
