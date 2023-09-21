import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CityListComponent } from './cities/city-list/city-list.component';
import { Error404Component } from './error404.component';
import { CityDetailsComponent } from './cities/city-details/city-details.component';
import { CityAddComponent } from './cities/city-add/city-add.component';
import { CityEditComponent } from './cities/city-edit/city-edit.component';
import { RxjsDemoComponent } from './shared/rxjsDemo.component';
import { canAccessGuard } from './cities/city-edit/edit-guard.guard';
import { CityFormGuard } from './cities/city-form.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'rxjs', component: RxjsDemoComponent, pathMatch: 'full' },
  { path: 'cities', component: CityListComponent, pathMatch: 'full' },
  { path: 'cities/add',canDeactivate:[CityFormGuard], component: CityAddComponent, pathMatch: 'full' },
  { path: 'cities/edit/:id',canActivate : [canAccessGuard], component: CityEditComponent, pathMatch: 'full'},
  { path: 'cities/:id', component: CityDetailsComponent, pathMatch: 'full' },
  { path: 'index', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
