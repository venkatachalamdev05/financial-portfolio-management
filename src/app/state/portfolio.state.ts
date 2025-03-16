// src/app/state/app.state.ts
export interface Investment {
  assetType: string;
  quantity: number;
  purchasePrice: number;
  date: string;
  currentPrice?: number;
}

export interface InvestmentState {
  investments: Investment[];
}

export const initialState: InvestmentState = {
  investments: []
};
