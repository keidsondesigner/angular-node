import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$!: Observable<IUser[]>;

  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(private _authService: AuthService,) { }

  ngOnInit(): void {
    this.users$ = this._authService.getAllUsers().pipe(
        tap(data => console.log('retorno data antes do map(): ', data)),
        map(data => data.users),
        tap(data => console.log('retorno data depois do map(): ', data))
      );
  }
}
