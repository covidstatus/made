import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GardService implements CanActivate{

  constructor(private as:AuthService, private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Promise<boolean>{
    return new Promise(resolve =>{
      this.as.authUser.subscribe(user => {
        if(user) resolve(true);
        else this.router.navigate(['/login'])
      })
    })
  }
}
