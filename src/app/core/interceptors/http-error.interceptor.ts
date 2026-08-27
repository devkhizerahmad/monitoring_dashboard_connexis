import { HttpErrorResponse, type HttpEvent, type HttpHandlerFn, type HttpRequest } from '@angular/common/http';
import { catchError, type Observable, throwError } from 'rxjs';

/**
 * HTTP error interceptor — logs errors to the console and re-throws
 * them so callers can handle them appropriately.
 */
export function httpErrorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Log the error details for debugging
      console.error(`[HTTP Error] ${req.method} ${req.urlWithParams}`, {
        status: error.status,
        statusText: error.statusText,
        message: error.message,
        error: error.error,
      });

      // Re-throw so the caller can handle it
      return throwError(() => error);
    }),
  );
}
