import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CursoService } from './core/services/curso.service';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'angularUdemy';

  courses$!: Observable<any>;

  constructor( private _coursesService: CursoService ){};

  ngOnInit(): void {
    this.courses$ = this._coursesService.getAllCourses();
    // this._coursesService.getAllCourses().subscribe( dados => {
    //   console.log('retorno funçao', dados);
    // });
  }
}
