import { ICourse } from "@core/models/course.model";
import { createAction, props } from "@ngrx/store";


export const LIMPA_STATE = '[Consulta Cursos] Limpa State Lista Cursos';

export const limpaState = createAction(LIMPA_STATE);

// TODO: LISTAR TODOS CURSOS;
export const OBTER_LISTA = '[Consulta Cursos] Obter Lista Cursos';
export const OBTER_LISTA_SUCESSO = '[Consulta Cursos] Obter Lista Cursos Sucesso';
export const OBTER_LISTA_ERRO = '[Consulta Cursos] Obter Lista Cursos Erro';

export const obterLista = createAction(OBTER_LISTA);
export const obterListaSucesso = createAction(OBTER_LISTA_SUCESSO, props<{ lista: ICourse[] }>());
export const obterListaErro= createAction(OBTER_LISTA_ERRO, props<{ erro: string }>());

// TODO: CURSO POR ID;
export const OBTER_CURSO_POR_ID = '[Consulta Cursos] Obter item Curso';
export const OBTER_CURSO_POR_ID_SUCESSO = '[Consulta Cursos] Obter item Curso Sucesso';
export const OBTER_CURSO_POR_ID_ERRO = '[Consulta Cursos] Obter item Curso Erro';

export const obterCursoPorId = createAction(OBTER_CURSO_POR_ID, props<{ id: number }>());
export const obterCursoPorIdSucesso = createAction(OBTER_CURSO_POR_ID_SUCESSO , props<{ curso: ICourse }>());
export const obterCursoPorIdErro= createAction(OBTER_CURSO_POR_ID_ERRO, props<{ erro: string }>());
