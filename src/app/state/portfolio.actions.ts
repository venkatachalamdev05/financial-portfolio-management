// src/app/state/investment.actions.ts
import { createAction, props } from '@ngrx/store';
import { Investment } from './portfolio.state';

export const addInvestment = createAction(
  '[Investment Form] Add Investment',
  props<{ investment: Investment }>()
);
