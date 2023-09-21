import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CityAddComponent } from './city-add/city-add.component';

@Injectable({
  providedIn: 'root',
})
export class CityFormGuard implements CanDeactivate<CityAddComponent> {
  canDeactivate(
    component: CityAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!component.formSubmitted) {
      const cityName = component.newCity.name;

      return confirm(
        `Would you like to navigate away and lose all the changes to ${cityName}`
      );
    }

    return true;
  }
}

// import { InjectDecorator, inject } from '@angular/core';

// import { CanDeactivateFn, Router } from '@angular/router';
// import { CityAddComponent } from './city-add/city-add.component';

// export const canAccessGuard: CanDeactivateFn(CityAddComponent) = (route, state) => {

// };
