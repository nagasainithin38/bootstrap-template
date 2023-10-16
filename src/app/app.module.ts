import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BodyComponent } from './body/body.component';
import { RightAreaComponent } from './right-area/right-area.component';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    BodyComponent,
    RightAreaComponent,
    CardComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
