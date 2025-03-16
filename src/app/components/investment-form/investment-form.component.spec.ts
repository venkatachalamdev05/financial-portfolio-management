import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestmentFormComponent } from './investment-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FacadeService } from 'src/app/facadeService/facade.service';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';

describe('InvestmentFormComponent', () => {
  let component: InvestmentFormComponent;
  let fixture: ComponentFixture<InvestmentFormComponent>;
  let mockFacadeService: jasmine.SpyObj<FacadeService>;

  beforeEach(() => {
    mockFacadeService = jasmine.createSpyObj('FacadeService', ['addInvestmentData']);

    TestBed.configureTestingModule({
      declarations: [InvestmentFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        StoreModule.forRoot({})
      ],
      providers: [
        { provide: FacadeService, useValue: mockFacadeService },
      ]
    });

    fixture = TestBed.createComponent(InvestmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
