import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { take, tap } from 'rxjs/operators';


import { CursoService } from 'src/app/core/services/curso.service';
import { obterCursoPorId, obterCursoPorIdErro, obterCursoPorIdSucesso, obterLista, obterListaErro, obterListaSucesso } from './consulta-cursos.actions';
import { ICourse } from '@core/models/course.model';

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

  obterCursoPorId$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(obterCursoPorId),
        take(1),
        tap(id => {
          return this.consultaCursosService.getCourse(id.id).subscribe({
            next: (curso: ICourse) => {
              this.store.dispatch(obterCursoPorIdSucesso({ curso }));
            },
            error: (erro: string) => {
              this.store.dispatch(obterCursoPorIdErro({ erro }));
            }
          });
        })
      ),
    { dispatch: false }
  );
}
