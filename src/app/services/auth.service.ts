import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected apiAuth = environment.hostAuth;

  constructor( private http: HttpClient ) { }

  createUser(bodyUser: IUser): Observable<any> {
      return this.http.post<IUser>(`${this.apiAuth}/create`, bodyUser);
  }

  loginUser(bodyUser: Omit<IUser, "name">): Observable<any> {
      return this.http.post<any>(`${this.apiAuth}/auth`, bodyUser);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiAuth}/users`);
  }
};
