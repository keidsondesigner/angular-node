import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';

import { selecionaCursoPorId, selecionaCursoPorIdErro, selecionaErro, selecionaIsLoading, selecionaLista } from './consulta-cursos.selectors';
import { limpaState, obterCursoPorId, obterLista } from './consulta-cursos.actions';
import { ICourse } from '@core/models/course.model';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCursosFacade {
  constructor(private store: Store) {}

  limpaState() {
    this.store.dispatch(limpaState());
  }

  // <<<<<<<<  OBTER_LISTA  >>>>>>>>>>>>>>>
  obterLista() {
    this.store.dispatch(obterLista());
  }

  selecionaLista$(): Observable<any[]> {
    return this.store.select(selecionaLista).pipe(
      distinctUntilChanged(),
      filter(data => !!data)
    );
  }

  selecionaLista(): Observable<any[]> {
    return this.selecionaLista$().pipe(take(1));
  }

  selecionaIsLoading$(): Observable<boolean> {
    return this.store.select(selecionaIsLoading).pipe(distinctUntilChanged());
  }

  selecionaIsLoading(): Observable<boolean> {
    return this.selecionaIsLoading$().pipe(take(1));
  }

  selecionaErro$(): Observable<string> {
    return this.store.select(selecionaErro).pipe(
      distinctUntilChanged(),
      filter(data => !!data)
    );
  }

  selecionaErro(): Observable<string> {
    return this.selecionaErro$().pipe(take(1));
  }


  // <<<<<<<<  OBTER_CURSO_POR_ID  >>>>>>>>>>>>>>>
  obterCursoPorId(id: number) {
    this.store.dispatch(obterCursoPorId({ id }));
  }

  selecionaCursoPorId(): Observable<ICourse> {
    return this.selecionaCursoPorId$().pipe(take(1));
  }

  selecionaCursoPorId$(): Observable<ICourse> {
    return this.store.select(selecionaCursoPorId).pipe(
      distinctUntilChanged(),
      filter(data => !!data)
    );
  }

  selecionaReenviarErro(): Observable<string> {
    return this.selecionaReenviarErro$().pipe(take(1));
  }

  selecionaReenviarErro$(): Observable<string> {
    return this.store.select(selecionaCursoPorIdErro).pipe(
      distinctUntilChanged(),
      filter(data => !!data)
    );
  }
}
