import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(state: ActivatedRouteSnapshot, route: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
    
  }
}
