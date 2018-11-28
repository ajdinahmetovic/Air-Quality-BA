import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {TodayComponent} from './today/today.component';
import {TipsComponent} from './tips/tips.component';
import {HourlyComponent} from './hourly/hourly.component';

export const appRoutes: Routes = [
  {path: '', component: TodayComponent, pathMatch: 'full'},
  {path: 'today', component: TodayComponent},
  {path: 'hourly', component: HourlyComponent},
  {path: 'tips', component: TipsComponent}
]
