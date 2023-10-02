import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConsultaCursosState, consultaCursosStateFeatureKey } from './consulta-cursos.reducer';
import { ICourse } from '@core/models/course.model';

export const selecionaConsultaCursos = createFeatureSelector<ConsultaCursosState>(consultaCursosStateFeatureKey);

export const selecionaIsLoading = createSelector(
  selecionaConsultaCursos,
  (state: ConsultaCursosState): boolean => state.isLoading
);

// <<<<<<<<  OBTER_LISTA  >>>>>>>>>>>>>>>
export const selecionaLista = createSelector(
  selecionaConsultaCursos,
  (state: ConsultaCursosState): ICourse[] => state.lista
);

export const selecionaErro = createSelector(selecionaConsultaCursos, (state: ConsultaCursosState): string => state.erro);

 // <<<<<<<<  OBTER_CURSO_POR_ID  >>>>>>>>>>>>>>>
export const selecionaCursoPorId = createSelector(
  selecionaConsultaCursos,
  (state: ConsultaCursosState): ICourse => state.curso
);

export const selecionaCursoPorIdErro = createSelector(selecionaConsultaCursos, (state: ConsultaCursosState): string => state.erro);
