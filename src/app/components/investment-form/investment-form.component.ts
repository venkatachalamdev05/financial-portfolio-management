import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/facadeService/facade.service';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})
export class InvestmentFormComponent {
  investmentForm!: FormGroup;
  showModal = false;

  constructor(private fb: FormBuilder,private router:Router, private facade:FacadeService) {}

  ngOnInit(): void {
    this.investmentForm = this.fb.group({
      assetType: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]],
      purchasePrice: ['', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern('^[0-9]*$')
      ]],
      date: ['', [Validators.required, this.dateValidator]]
    });
  }

  dateValidator(control: any): { [key: string]: boolean } | null {
    const today = new Date();
    const selectedDate = new Date(control.value);
    if (selectedDate > today) {
      return { 'futureDate': true };
    }
    return null;
  }


  openConfirmDialog(): void {
    if (this.investmentForm.valid) {
      this.showModal = true;
    }
  }

  confirmSubmit(): void {
    if (this.investmentForm.valid) {
      const investment = this.investmentForm.value;
      this.facade.addInvestmentData(investment)
      this.investmentForm.reset();
      this.showModal = false;
      this.router.navigate([""])
    }
  }

  get assetType() { return this.investmentForm.get('assetType'); }
  get quantity() { return this.investmentForm.get('quantity'); }
  get purchasePrice() { return this.investmentForm.get('purchasePrice'); }
  get date() { return this.investmentForm.get('date'); }
}
