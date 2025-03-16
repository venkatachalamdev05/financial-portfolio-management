import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InvestmentState } from './portfolio.state';


export const selectInvestments = createFeatureSelector<InvestmentState>('appState');

export const selectAllInvestments = createSelector(
  selectInvestments,
  (state: InvestmentState) => state.investments
);
