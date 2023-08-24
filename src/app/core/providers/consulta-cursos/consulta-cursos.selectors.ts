import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConsultaCursosState, consultaCursosStateFeatureKey } from './consulta-cursos.reducer';

export const selecionaConsultaCursos = createFeatureSelector<ConsultaCursosState>(consultaCursosStateFeatureKey);

export const selecionaIsLoading = createSelector(
  selecionaConsultaCursos,
  (state: ConsultaCursosState): boolean => state.isLoading
);

export const selecionaLista = createSelector(
  selecionaConsultaCursos,
  (state: ConsultaCursosState): any[] => state.lista
);

export const selecionaErro = createSelector(selecionaConsultaCursos, (state: ConsultaCursosState): string => state.erro);
