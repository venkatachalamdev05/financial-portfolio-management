import { createReducer, on } from '@ngrx/store';
import { addInvestment } from './portfolio.actions';
import { initialState } from './portfolio.state';


export const investmentReducer = createReducer(
  initialState,
  on(addInvestment, (state, { investment }) => {
    const newState = {
      ...state,
      investments: [...state.investments, investment]
    };
    return newState;
  })
);
