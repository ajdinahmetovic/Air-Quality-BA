import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {Rss} from '../dataStruct/rss';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {


  @Inject(LOCALE_ID) public locale: string;


  constructor(private http: HttpClient, private app: AppComponent) {



    this.rssFeed = app.rssFeed;

     this.data = this.rssFeed.AQIs();
     this.updateData();
     this.daysGen();
  }

  rssFeed: Rss;


  public chartType = 'line';

  data: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  days: string[] = ['', '', '', '', '', ''];

  public chartDatasets: Array<any> = [
    {data: this.data, label: 'AQI Value'},
  ];

  public chartLabels: Array<any> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  public chartColors: Array<any> = [

    {
      backgroundColor: '#A9A9A9',
      borderColor: '#808080',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          min: 0,
          stepSize: 40
        }
      }]
    }
  };

  public chartClicked(e: any): void {



  }
  public chartHovered(e: any): void { }

  updateData () {

      for (let i = 0; i < 7; i++) {
        this.data[i] = Number(this.rssFeed.channel.itemsReverse[i].AQI);
      }
  }

  daysGen () {

    for ( let i = 0; i < 7; i++) {
      this.days[i] = formatDate(this.rssFeed.channel.items[23 - i].ReadingDateTime, 'hh:mm', 'en-US');
      console.log(this.rssFeed.channel.items[i].ReadingDateTime);

    }

  }
  ngOnInit() {

    setTimeout(() => {

      this.chartDatasets = [
        {data: this.data, label: 'AQI Value'},
      ];
      this.chartLabels = this.days;

    }, 250);
  }
}
