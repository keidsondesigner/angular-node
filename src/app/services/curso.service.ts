import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from 'src/models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  protected baseUrl = environment.host;

  constructor( private http: HttpClient ) { }

  getAllCourses(): Observable<Course[]> {
      return this.http.get<Course[]>(`${this.baseUrl}/cursos`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/cursos/${id}`);
  }

  updateCourse(course: Course): Observable<any> {
    return this.http.put(`${this.baseUrl}/cursos/${course.id}`, course);
  }
}
