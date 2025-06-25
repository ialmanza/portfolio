import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EmailStatus {
  success: boolean;
  message: string;
  details?: string;
}

@Component({
  selector: 'app-email-status-modal',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './email-status-modal.component.html',
  styleUrl: './email-status-modal.component.css'
})
export class EmailStatusModalComponent {
  @Input() isOpen = false;
  @Input() status: EmailStatus | null = null;

  @Output() close = new EventEmitter<void>();
  @Output() primaryAction = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();

  isAnimating = false;

  ngOnChanges() {
    if (this.isOpen) {
      setTimeout(() => this.isAnimating = true, 10);
    } else {
      this.isAnimating = false;
    }
  }

  onBackdropClick() {
    this.closeModal();
  }

  onPrimaryAction() {
    this.primaryAction.emit();
    if (this.status?.success) {
      this.closeModal();
    }
  }

  onSecondaryAction() {
    this.secondaryAction.emit();
    this.closeModal();
  }

  private closeModal() {
    this.isAnimating = false;
    setTimeout(() => this.close.emit(), 300);
  }
}
