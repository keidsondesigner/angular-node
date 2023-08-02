import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, tap } from 'rxjs';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'curso', 'acoes'];
  courses$!: Observable<any>;
  // cursos!: any[];

  constructor( private _coursesService: CursoService, private router: Router ){};

  ngOnInit(): void {
    this.courses$ = this._coursesService.getAllCourses().pipe(tap(
      retorno => console.log('chamada do método', retorno)
    ));
    // this._coursesService.getAllCourses().subscribe( cursos => {
    //   console.log('retorno funçao', cursos);
    //   this.cursos = cursos;
    // });
  }

  editar(course: any){
    this.router.navigate(['produto/editar-produto', course.id]);
    console.log('editar');
  }

}
