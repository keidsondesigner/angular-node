import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';


import { CursoService } from 'src/app/services/curso.service';
import { obterLista, obterListaErro, obterListaSucesso } from './consulta-cursos.actions';

@Injectable()
export class ConsultaCursosEffects {
  constructor(private actions$: Actions, private store: Store, public consultaCursosService: CursoService) {}

  obterLista$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(obterLista),
        tap(() => {
          return this.consultaCursosService.getAllCourses().subscribe({
            next: (lista: any[]) => {
              this.store.dispatch(obterListaSucesso({ lista }));
            },
            error: (erro: string) => {
              this.store.dispatch(obterListaErro({ erro }));
            }
          });
        })
      ),
    { dispatch: false }
  );
}
