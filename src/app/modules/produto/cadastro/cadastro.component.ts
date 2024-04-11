import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/core/services/curso.service';
import { ICourse } from 'src/app/core/models/course.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  id!: string;
  curso!: any;

  formCourse!: FormGroup;

  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _coursesService: CursoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrNotifier: ToastrService,
  ){
    this.initForm();
  };

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.url[1].path;

    this._coursesService.getCourse(parseInt(this.id)).subscribe( course => {
      this.curso = course;
      console.log(this.curso);
      this.formCourse.controls['categoria'].setValue(this.curso.categoria);
      this.formCourse.controls['curso'].setValue(this.curso.curso);
    })
  }

  initForm(){
    this.formCourse = this.formBuilder.group({
      categoria: ['', [Validators.required, Validators.minLength(4)]],
      curso: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  saveChanges() {
    if (this.formCourse.invalid) {
      this.toastrNotifier.warning('Preencha todos os campos.', 'Formulário inválido!');
      return;
    }

    const bodyCourseToSave: ICourse = {
      id: parseInt(this.id),
      categoria: this.formCourse.controls['categoria'].value,
      curso: this.formCourse.controls['curso'].value
    }
    console.log('form com novo valor', this.formCourse.getRawValue());

    this.loading = true;
    this._coursesService.updateCourse(bodyCourseToSave).subscribe({
      next: () => {
        this.router.navigate((['/produtos/lista-produtos']));
        // this.router.navigate(['../login'], { relativeTo: this.route });
        this.toastrNotifier.success('Curso editado com sucesso', 'Wowww!');
        console.log('sucesso ao editado curso')
      },
      error: error => {
        console.log(error);
        this.toastrNotifier.error(error.msg, 'Error ao editado curso!');
        console.log('erro ao editado curso');
        this.loading = false;
      }
    });
  }
}
