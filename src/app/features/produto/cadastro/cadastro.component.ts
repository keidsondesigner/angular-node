import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  formCourse!: FormGroup;

  constructor(private formBuilder: FormBuilder, private _coursesService: CursoService, private activatedRoute: ActivatedRoute){};

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;
    this.createForm();

    this._coursesService.getCourse(Number(this.id)).subscribe( course => {
      this.curso = course;
      console.log(this.curso);
      this.formCourse.controls['categoria'].setValue(this.curso.categoria);
      this.formCourse.controls['curso'].setValue(this.curso.curso);
    })
  }

  createForm() {
    this.formCourse = this.formBuilder.group({
      categoria: '',
      curso: '',
    });
  }

  salvarAlteracao(){
    console.log('salvar');
  }

}
