import { AlertsModule } from 'angular-alert-module';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list/city-list.component';
// import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CityDetailsComponent } from './city-details/city-details.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CityAddComponent } from './city-add/city-add.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityEditComponent } from './city-edit/city-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CitiesData } from '../Data/cities.data';
const routes: Route[] = [];
@NgModule({
  declarations: [
    CityListComponent,
    CityDetailsComponent,
    CityAddComponent,
    CityEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertsModule.forRoot()
    
  ],
  exports: [CityListComponent, CityDetailsComponent, CityAddComponent,CityListComponent],
})
export class CitiesModule {}
