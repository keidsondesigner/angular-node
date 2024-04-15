import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AddJwtInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastrNotifier: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    console.log('aqui token', token);

    if(token) {
      request = request.clone({ setHeaders: { Authorization: 'Bearer ' + token }})
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401) {
          console.log(error);
          console.log(error.error);
          this.toastrNotifier.error('token não fornecido', 'Error ao efetuar login!');
          this.router.navigate(['/pages/auth/login']);
        } else if(error.status ===  498) {
          this.router.navigate(['/pages/auth/login']);
          this.toastrNotifier.error('Efetue o login corretamente', 'Token inválido!');
        }
        return throwError(() => error);
      })
    );
  }
}
