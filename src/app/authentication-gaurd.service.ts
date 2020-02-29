import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGaurdService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
console.log(this.cookieService.get("isAuthenticated"));
    if (this.cookieService.get("isAuthenticated") == "true")
     {
        return true; 
      }
    else { return false; }
  }


  constructor(private cookieService: CookieService) { }


}
