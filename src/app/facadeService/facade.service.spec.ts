import { TestBed } from '@angular/core/testing';
import { FacadeService } from './facade.service';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

describe('FacadeService', () => {
  let service: FacadeService;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(() => {
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    TestBed.configureTestingModule({
      providers: [
        FacadeService,
        { provide: Store, useValue: mockStore }
      ]
    });
    service = TestBed.inject(FacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch investment data', () => {
    mockStore.select.and.returnValue(of([]));
    service.fetchInvestmentData().subscribe((data) => {
      expect(data).toEqual([]);
    });
    expect(mockStore.select).toHaveBeenCalled();
  });

  it('should dispatch addInvestment action', () => {
    const mockInvestment = { assetType: 'Stocks', quantity: 10, purchasePrice: 100, date: '2025-03-16' };
    service.addInvestmentData(mockInvestment);
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});
