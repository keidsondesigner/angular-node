import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient ) { }

  getAllCourses(): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/cursos`).pipe(
        tap(retorno => console.log('retorno getAllCourses()', retorno))
      );
  }
}
