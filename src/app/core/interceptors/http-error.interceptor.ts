import type { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import type { Observable } from 'rxjs';

/**
 * HTTP error interceptor — stub. Passes requests through untouched.
 */
export function httpErrorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(req);
}