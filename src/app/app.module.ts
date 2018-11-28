import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { TodayComponent } from './today/today.component';
import { TipsComponent } from './tips/tips.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {MatBottomSheetModule, MatCardModule, MatGridListModule, MatListModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import { HourlyComponent } from './hourly/hourly.component';
import {SwipeDirective} from './swipeDirective';
import { ShareComponent } from './share/share.component';
import {ShareButtonsModule} from '@ngx-share/buttons';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import {ButtonsModule, CarouselModule, ChartsModule, WavesModule} from 'angular-bootstrap-md';
import { PrticlesInfoComponent } from './prticles-info/prticles-info.component';




@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    TipsComponent,
    HeaderComponent,
    NavComponent,
    HourlyComponent,
    SwipeDirective,
    ShareComponent,
    ScrollbarComponent,
    PrticlesInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    MatGridListModule,
    HttpClientModule,
    MatBottomSheetModule,
    ShareButtonsModule.forRoot(),
    MatDividerModule,
    ChartsModule,
    MatCardModule,
    MatListModule,
    CarouselModule,
    WavesModule,
    ButtonsModule
    //
  ],
  entryComponents: [
    ShareComponent
  ],

 exports: [
   BrowserAnimationsModule,
   MatTabsModule,

 ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
