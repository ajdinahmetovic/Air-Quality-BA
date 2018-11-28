import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  rss;


  height = this.height - 50 - 60;

  groups = GROUPS.slice(0);
  constructor(app: AppComponent) {

    this.rss = app.rssFeed;


  }

  ngOnInit() {
  }

  getFact () {

    switch (Math.floor(Math.random() * 5) + 0) {
      case 0: {
        return 'Long-term exposure to polluted air can have permanent health effects such as accelerated aging of the lungs.';
      }
      case 1: {
        return 'Long-term exposure to particulate pollution can result in significant health problems including decreased lung function.';
      }

      case 2: {
        return 'High air pollution levels can cause immediate health problems including aggravated cardiovascular and respiratory illness.';
      }

      case 3: {
        return 'Long-term exposure to particulate pollution can result in significant health problems including irregular heartbeat.';
      }

      case 4: {
        return 'Long-term exposure to polluted air can have permanent health effects such as shortened life span.';
      }

      case 5: {
        return 'Long-term exposure to particulate pollution can result in significant health problems including development of chronic respiratory disease in children.';
      }
    }

  }

  getImpact () {
    switch (this.rss.getLatestStatus()) {
      case 'Good': {
        return 'Minimal impact';
      }
      case 'Moderate': {
        return 'May cause minor breathing discomfort to sensitive people.';
      }

      case 'Unhealthy for Sensitive Groups': {
        return 'May cause breathing discomfort to people with lung disease such as asthma, and discomfort to people with heart disease, children and older adults.';
      }

      case 'Unhealthy': {
        return 'May cause breathing discomfort to people on prolonged exposure, and discomfort to people with heart disease.';
      }

      case 'Very Unhealthy': {
        return 'May cause respiratory illness to the people on prolonged exposure. Effect may be more pronounced in people with lung and heart diseases.';
      }

      case 'Hazardous': {
        return 'May cause respiratory impact even on healthy people, and serious health impacts on people with lung/heart disease. The health impacts may be experienced even during light physical activity.';
      }
    }
  }


  getToday(arg) {

    switch (arg) {
      case 'Good': {
        return 'Everyone can continue their outdoor activities normally.';
      }
      case 'Moderate': {
        return 'Only very few hypersensitive people should reduce outdoor activities.';
      }

      case 'Unhealthy for Sensitive Groups': {
        return 'Children, seniors and individuals with respiratory or heart diseases should reduce sustained and high-intensity outdoor exercises.';
      }

      case 'Unhealthy': {
        return 'Children, seniors and individuals with respiratory or heart diseases should avoid sustained and high-intensity outdoor exercises. General population should moderately reduce outdoor activities.';
      }

      case 'Very Unhealthy': {
        return 'Children, seniors and individuals with heart or lung diseases should stay indoors and avoid outdoor activities. General population should reduce outdoor activities.';
      }

      case 'Hazardous': {
        return 'Children, seniors and the sick should stay indoors and avoid physical exertion. General population should avoid outdoor activities.';
      }
    }
  }
}


export const GROUPS = [

  {
    imgSrc: 'src/assets/group0.svg',
    desc: 'Individuals with heart disease'
  },

  {
    imgSrc: 'src/assets/group1.svg',
    desc: 'Individuals with lung diseases'
  },

  {
    imgSrc: 'src/assets/group2.svg',
    desc: 'Pregnant women'
  },

  {
    imgSrc: 'src/assets/group3.svg',
    desc: 'Outdoor workers'
  },

  {
    imgSrc: 'src/assets/group4.svg',
    desc: 'Older adults and the elderly'
  },

  {
    imgSrc: 'src/assets/grup5.svg',
    desc: 'Children under age 14'
  },

  {
    imgSrc: 'src/assets/group6.svg',
    desc: 'Athletes who exercise vigorously outdoors'
  },



]

