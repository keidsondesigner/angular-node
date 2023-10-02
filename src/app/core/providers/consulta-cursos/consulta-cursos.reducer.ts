import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import {
  limpaState,
  obterCursoPorId,
  obterCursoPorIdErro,
  obterCursoPorIdSucesso,
  obterLista,
  obterListaErro,
  obterListaSucesso
} from "./consulta-cursos.actions";
import { ICourse } from "@core/models/course.model";


export interface ConsultaCursosState {
  lista: ICourse[];
  curso: ICourse;
  isLoading: boolean;
  erro: string;
}

export const consultaCursosStateFeatureKey = 'consultaCursos';

export const initialState: ConsultaCursosState = {
  lista: [],
  curso: {
    curso: '',
    categoria: '',
  },
  isLoading: false,
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
  })),

  on(obterCursoPorId, state => ({
    ...state,
    isLoading: true,
    error: undefined
  })),
  on(obterCursoPorIdSucesso, (state, { curso }) => ({
    ...state,
    curso,
    isLoading: false,
    error: undefined
  })),
  on(obterCursoPorIdErro, (state, { erro }) => ({
    ...state,
    isLoading: false,
    erro
  }))
);
