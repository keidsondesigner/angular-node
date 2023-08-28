import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUsersResponse } from '../models/user.model';

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

  getAllUsers(): Observable<IUsersResponse> {
    return this.http.get<IUsersResponse>(`${this.apiAuth}/users`);
  }
};
