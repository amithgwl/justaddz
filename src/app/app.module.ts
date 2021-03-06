import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListPageComponent } from './component/list-page/list-page.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';

import { JustAddsServiceService } from './service/just-adds-service.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AdvertiseComponent } from './component/advertise/advertise.component';
import { WhyUsComponent } from './component/why-us/why-us.component';
import { AdminListComponent } from './component/admin-list/admin-list.component';
import { AdminAddComponent } from './component/admin-add/admin-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPageComponent,
    DetailsPageComponent,
    DashboardComponent,
    ContactUsComponent,
    AdvertiseComponent,
    WhyUsComponent,
    AdminListComponent,
    AdminAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9k2tLaD1SQu9d5h4J0G9263Y9nrTmV1w'
    })
  ],
  providers: [appRoutingProviders, JustAddsServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
