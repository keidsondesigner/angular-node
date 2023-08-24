import { createAction, props } from "@ngrx/store";


export const LIMPA_STATE = '[Lista Cursos] Limpa State Lista Cursos';
export const OBTER_LISTA = '[Lista Cursos] Obter Lista Cursos';
export const OBTER_LISTA_SUCESSO = '[Lista Cursos] Obter Lista Cursos Sucesso';
export const OBTER_LISTA_ERRO = '[Lista Cursos] Obter Lista Cursos Erro';



export const limpaState = createAction(LIMPA_STATE);

export const obterLista = createAction(OBTER_LISTA);

export const obterListaSucesso = createAction(OBTER_LISTA_SUCESSO, props<{ lista: any[] }>());

export const obterListaErro= createAction(OBTER_LISTA_ERRO, props<{ erro: string }>());
