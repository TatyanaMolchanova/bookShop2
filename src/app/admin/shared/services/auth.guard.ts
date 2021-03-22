import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAdmin;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.isAdmin = this.authService.isAdmin$.subscribe(data => {
      console.log('data', data);
      this.isAdmin = data;
    });

    if (this.isAdmin === true) {
      return true;
    } else {
      this.router.navigate(['/admin']);
    }

    // return this.isAdmin;
  }
}
