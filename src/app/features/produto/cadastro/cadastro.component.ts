import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  id!: string;
  curso!: any;

  constructor( private _coursesService: CursoService, private activatedRoute: ActivatedRoute ){};

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;

    this._coursesService.getCourse(Number(this.id)).subscribe( course => {
      this.curso = course;
      console.log(this.curso);
    })
  }

}
