import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { limpaState, obterLista, obterListaErro, obterListaSucesso } from "./consulta-cursos.actions";


export interface ConsultaCursosState {
  isLoading: boolean;
  lista: any[];
  erro: string;
}

export const consultaCursosStateFeatureKey = 'consultaCursos';

export const initialState: ConsultaCursosState = {
  isLoading: false,
  lista: [],
  erro: ''
};

export const consultaCursosReducer: ActionReducer<ConsultaCursosState, Action> = createReducer(
  initialState,
  on(limpaState, () => ({
    ...initialState
  })),
  on(obterLista, state => ({
    ...state,
    isLoading: true,
    error: undefined
  })),
  on(obterListaSucesso, (state, { lista }) => ({
    ...state,
    lista,
    isLoading: false,
    error: undefined
  })),
  on(obterListaErro, (state, { erro }) => ({
    ...state,
    isLoading: false,
    erro
  }))
);
