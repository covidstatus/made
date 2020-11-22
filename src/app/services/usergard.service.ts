import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsergardService implements CanActivate {

  constructor(private as:AuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }
  CanActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<boolean>{
    return new Promise(resolve =>{
      this.as.authUser.subscribe(user => {
        if(user) resolve(true);
        else this.router.navigate([''])
      })
    })
  }
}
