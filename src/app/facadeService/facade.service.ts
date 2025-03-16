import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllInvestments } from '../state/portfolio.selectors';
import { addInvestment } from '../state/portfolio.actions';
import { Investment } from '../state/portfolio.state';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private store: Store) {}

  fetchInvestmentData(){
    return this.store.select(selectAllInvestments)
  }

  addInvestmentData(investment:Investment){
    this.store.dispatch(addInvestment({investment}));
  }
}
