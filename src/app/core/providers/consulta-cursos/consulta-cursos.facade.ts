import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, take } from 'rxjs/operators';

import { selecionaErro, selecionaIsLoading, selecionaLista } from './consulta-cursos.selectors';
import { limpaState, obterLista } from './consulta-cursos.actions';


@Injectable({
  providedIn: 'root'
})
export class ConsultaCursosFacade {
  constructor(private store: Store) {}

  limpaState() {
    this.store.dispatch(limpaState());
  }

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
}
