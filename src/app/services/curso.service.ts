import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICourse } from 'src/app/core/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient ) { }

  getAllCourses(): Observable<ICourse[]> {
      return this.http.get<ICourse[]>(`${this.baseUrl}/cursos`);
  }

  getCourse(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`${this.baseUrl}/cursos/${id}`);
  }

  updateCourse(bodyCourse: ICourse): Observable<any> {
    return this.http.put(`${this.baseUrl}/cursos/${bodyCourse.id}`, bodyCourse);
  }
}
