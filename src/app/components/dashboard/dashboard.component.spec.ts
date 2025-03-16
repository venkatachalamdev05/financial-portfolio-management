import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { FacadeService } from 'src/app/facadeService/facade.service';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let facadeService: jasmine.SpyObj<FacadeService>;

  beforeEach(() => {
    facadeService = jasmine.createSpyObj('FacadeService', ['fetchInvestmentData']);
    facadeService.fetchInvestmentData.and.returnValue(of([]));
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MatCardModule],
      providers: [
        { provide: FacadeService, useValue: facadeService },
      ],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
