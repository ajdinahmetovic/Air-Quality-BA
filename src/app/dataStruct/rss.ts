import {Channel} from './channel';
import {Item} from './item';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

export class Rss {




  channel: Channel = new Channel();


  public chartDatasets: Array<any> = [
    {data: [this.channel.items[0],this.channel.items[1], this.channel.items[2]], label: 'AQI Value'},
  ];

  data: Array <any> = new Array<any>();
  private readonly API = 'http://dosairnowdata.org/dos/RSS/Sarajevo/Sarajevo-PM2.5.xml';

  processData (xml: string) {



    this.channel.title = xml.substring(xml.indexOf('<title>') + 7, xml.indexOf('</title>'));


    for (let i = 0; i < 24; i++) {

      this.channel.items[i] = new Item();
      this.channel.items[i].title = xml.substring(xml.indexOf('<title>') + 7, xml.indexOf('</title>'));
      this.channel.items[i].AQI = xml.substring(xml.indexOf('<AQI>') + 5, xml.indexOf('</AQI>'));
      this.channel.items[i].ReadingDateTime = xml.substring(xml.indexOf('<ReadingDateTime>') + 17, xml.indexOf('</ReadingDateTime>'));
      this.channel.items[i].Params = xml.substring(xml.indexOf('<Param>') + 7, xml.indexOf('</Param>'));
      this.channel.items[i].NowCastConc = xml.substring(xml.indexOf('<NowCastConc>') + 13, xml.indexOf('</NowCastConc>'));
      this.channel.items[i].description = xml.substring(xml.indexOf('<description>') + 13, xml.indexOf('</description>'));
      this.channel.items[i].Desc = xml.substring(xml.indexOf('<Desc>') + 6, xml.indexOf('</Desc>'));
      this.channel.items[i].Conc = xml.substring(xml.indexOf('<Conc>') + 6, xml.indexOf('</Conc>'));
      xml = xml.substring(xml.indexOf('</item>') + 7 + 6, xml.length);
    }

    this.reverseArray();
    // this.testAPI();
  }

  testAPI () {
    for (let i = 0; i < 24; i++) {
      console.log(this.channel.items[i].title + '\n' +
        this.channel.items[i].AQI + '\n' +
        this.channel.items[i].ReadingDateTime + '\n' +
        this.channel.items[i].Params + '\n' +
        this.channel.items[i].NowCastConc + '\n' +
        this.channel.items[i].description + '\n' +
        this.channel.items[i].Desc + '\n' +
        this.channel.items[i].Conc + '\n');
    }
  }

  constructor(private http: HttpClient) {
      this.fetchData();
  }


  fetchData () {

    this.http.get(this.API, {responseType: 'text'}).subscribe((response => {
      this.processData(response);
    }));

  }

  getCity (): string {
    return this.channel.title;
  }

  getLatestAQI (): string {
    return this.channel.items[23].AQI;
  }

  getLatestStatus (): string {

      return this.channel.items[23].Desc;

  }

  getLatestStatusBA (): string {

    switch (this.getLatestStatus()) {
      case 'Good': {
        return 'Dobro';
      }

      case 'Moderate': {
        return 'Umjeren';      }

      case 'Unhealthy for Sensitive Groups': {
        return 'Nezdrav za osjetljive grupe ljudi';      }

      case 'Unhealthy': {
        return 'Nezdrav';      }

      case 'Very Unhealthy': {
        return 'Veoma nezdrav';      }

      case 'Hazardous': {
        return 'Opasan';      }
    }

  }

  reverseArray () {
    for (let i = 0; i < 24; i++) {
      this.channel.itemsReverse[i] = this.channel.items[23 - i];
    }
  }

  AQIs (): Array<any> {


    for (let i = 0; i < 24; i++) {
      this.data.push( this.channel.items[i].AQI);
      // console.log(this.channel.items[i].AQI);
    }

    return this.data;
  }





}
