import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CitiesModule } from './cities/cities.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CitiesData } from './Data/cities.data';

@NgModule({
  declarations: [AppComponent, HomeComponent,Error404Component, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CitiesModule,
    SharedModule,
    HttpClientModule,
    AlertsModule.forRoot(),
    InMemoryWebApiModule.forRoot(CitiesData),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
