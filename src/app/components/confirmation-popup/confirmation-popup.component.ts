import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent {
  @Input() investmentForm: any;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

  confirmSubmit() {
    this.confirm.emit();
  }
}
