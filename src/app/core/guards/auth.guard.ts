import { Injectable } from '@angular/core';
import type { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

/**
 * Auth guard — stub. Always allows navigation.
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): boolean | UrlTree {
    return true;
  }
}