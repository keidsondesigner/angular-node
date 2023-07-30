import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  courses$!: Observable<any>;

  constructor( private _coursesService: CursoService ){};

  ngOnInit(): void {
    this.courses$ = this._coursesService.getAllCourses();
    // this._coursesService.getAllCourses().subscribe( dados => {
    //   console.log('retorno funçao', dados);
    // });
  }

}
