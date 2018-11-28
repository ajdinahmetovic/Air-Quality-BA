import { Component, OnInit } from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {PrticlesInfoComponent} from '../prticles-info/prticles-info.component';
import {element} from 'protractor';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {

  rssFeed: Rss;

  particlesArray;


  constructor(private http: HttpClient, private app: AppComponent) {
    this.rssFeed = app.rssFeed;
  }


  ngOnInit() {
  }

  checkTxt(args) {
    if (args === 'Unhealthy for Sensitive Groups') {
      return true;

    } else {
      return false;
    }
  }

  chek(args) {


    if (args) {
      if (args === 'Unhealthy for Sensitive Groups') {
        return 'Unhealthy for';

      } else {
        return args;
      }
    }
  }
  getExtra (args) {
    if (args) {
      return 'Sensitive Groups';
    } else {
     return '';
     }
    }



  getColor (arg): string {
    switch (arg) {
      case 'Good': {
        return 'src/assets/circ_good.svg';
      }

      case 'Moderate': {
        return 'src/assets/circ_moderate.svg';
      }

      case 'Unhealthy for Sensitive Groups': {
        return 'src/assets/circ_unhealthyforsensgroups.svg';
      }

      case 'Unhealthy': {
        return 'src/assets/circ_unhealthy.svg';
      }

      case 'Very Unhealthy': {
        return 'src/assets/circ_veryunhealthy.svg';
      }

      case 'Hazardous': {
        return 'src/assets/circ_hazardous.svg';
      }
    }
  }

}
