import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const newReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer TOKENISKO'
    }
  });
  return next(newReq)
};
