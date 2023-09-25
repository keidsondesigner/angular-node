import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.model';
import { CursoService } from 'src/app/core/services/curso.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {
  formCreateCourse!: FormGroup;

  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _coursesService: CursoService,
    private router: Router,
    private toastrNotifier: ToastrService,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm(){
    this.formCreateCourse = this.formBuilder.group({
      categoria: ['', [Validators.required, Validators.minLength(4)]],
      curso: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.formCreateCourse.controls; }

  onSubmit() {
    if (this.formCreateCourse.invalid) {
      this.toastrNotifier.warning('Preencha todos os campos.', 'Formulário inválido!');
      return;
    }

    const bodyCourseToSave: ICourse = {
      categoria: this.formCreateCourse.controls['categoria'].value,
      curso: this.formCreateCourse.controls['curso'].value
    }
    console.log('form com novo valor', this.formCreateCourse.getRawValue());

    this.loading = true;
    this._coursesService.createCourse(bodyCourseToSave)
    .subscribe({
        next: () => {
          this.router.navigateByUrl('/produtos/lista-produtos')
          this.toastrNotifier.success('Curso criado com sucesso', 'Wowww!');
          console.log('sucesso ao criar curso')
        },
        error: error => {
          console.log(error);
          this.toastrNotifier.error(error.msg, 'Error ao criar curso!');
          console.log('erro ao criar curso');
          this.loading = false;
        }
    });
  }

}
