import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject, takeUntil } from 'rxjs';

import { ConsultaCursosFacade } from '@providers/consulta-cursos/consulta-cursos.facade';
import { CursoService } from '@core/services/curso.service';
import { ToastrService } from 'ngx-toastr';
import { ICourse } from '@core/models/course.model';




@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> = new Observable;
  listaCursos$: Observable<ICourse[]> = new Observable;
  erro: string = '';
  destroyed$: Subject<void> = new Subject();

  canShowDialog = false;

  recoverIdToDelete: number | null = null;

  recoverTitleCourse: string = '';

  constructor(
    private consultaCursosFacade: ConsultaCursosFacade,
    private router: Router,
    private _consultaCursosService: CursoService,
    private toastrNotifier: ToastrService,
    ) {}

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.destroyed$ = new Subject();
    this.consultaCursosFacade.obterLista();
    this.isLoading$ = this.consultaCursosFacade.selecionaIsLoading$();
    this.listaCursos$ = this.consultaCursosFacade.selecionaLista$().pipe(takeUntil(this.destroyed$));
    console.log('this.listaCursos$', this.listaCursos$);

    this.consultaCursosFacade
      .selecionaErro$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(erro => (this.erro = erro));
  }


  editar(course: any){
    this.router.navigate(['/produtos/editar-produto', course.id]);
    console.log('editar');
  }

  dialogConfirmDelete(itemCourse: ICourse) {
    this.canShowDialog = true;
    this.recoverTitleCourse = itemCourse.curso;
    console.log('dialogConfirmDelete id', itemCourse.id);

    if (itemCourse.id !== undefined) {
      this.recoverIdToDelete = itemCourse.id;
    }
  }

  onDeleteItem() {
    if (this.recoverIdToDelete !== null) {
      console.log('onDeleteItem id', this.recoverIdToDelete);
      // this.consultaCursosFacade.obterCursoPorId(this.recoverIdToDelete);
      // this.consultaCursosFacade.selecionaCursoPorId$().subscribe(result => {
      //   console.log('result', result);
      // });

      this._consultaCursosService.deleteCourse(this.recoverIdToDelete).subscribe({
        next: (result) => {
          console.log('result', result);

          this.toastrNotifier.success('o curso foi deletado.', 'SUCESSO!');
          if (result.status === 'ok') {
            this.canShowDialog = false;
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        },
      });
    }
  }


  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
