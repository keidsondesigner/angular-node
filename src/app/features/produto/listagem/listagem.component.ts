import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subject, takeUntil } from 'rxjs';
import { ConsultaCursosFacade } from 'src/app/core/providers/consulta-cursos/consulta-cursos.facade';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['categoria', 'curso', 'acoes'];

  isLoading$!: Observable<boolean>;
  listaCursos$!: Observable<any[]>;
  erro!: string;
  destroyed$!: Subject<void>;


  constructor(private consultaCursosFacade: ConsultaCursosFacade, private router: Router) {}

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.destroyed$ = new Subject();
    this.consultaCursosFacade.obterLista();
    this.isLoading$ = this.consultaCursosFacade.selecionaIsLoading$();
    this.listaCursos$ = this.consultaCursosFacade.selecionaLista$().pipe(takeUntil(this.destroyed$));

    this.consultaCursosFacade
      .selecionaErro$()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(erro => (this.erro = erro));
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  editar(course: any){
    this.router.navigate(['produto/editar-produto', course.id]);
    console.log('editar');
  }

}
