// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EditGuardGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }

import { state } from "@angular/animations";
import { InjectDecorator,inject } from "@angular/core";
import { CanActivateFn,Router } from "@angular/router";

export const canAccessGuard:CanActivateFn=(route,state)=>{
  let router  = inject(Router);
  const id = route.params['i d'];
  var idParam  = Number(id);
  if(isNaN(idParam) || idParam<1){
    router.navigate(['/home']);
    return false
  }
  return true
}