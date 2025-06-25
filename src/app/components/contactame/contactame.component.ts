import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { FooterComponent } from "../footer/footer.component";
import { EmailStatusModalComponent, EmailStatus } from "../email-status-modal/email-status-modal.component";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contactame',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent, EmailStatusModalComponent, CommonModule],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css'
})
export class ContactameComponent {
  contactForm: FormGroup;

   // Propiedades para el modal
  showModal = false;
  emailStatus: EmailStatus | null = null;
  isLoading = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.send();
    } else {
      // Marcar todos los campos como touched para mostrar errores
      this.contactForm.markAllAsTouched();
    }
  }
  async send() {
    if (this.contactForm.invalid) {
      this.showErrorModal('Por favor, completa todos los campos correctamente.');
      return;
    }

    this.isLoading = true;

    try {
      emailjs.init('okEjA9dn2w_9EpoeX');

      const response = await emailjs.send("service_hnxkumu", "template_h7iuj6w", {
        from_name: this.contactForm.value.firstName,
        to_name: "pocholo",
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        message: this.contactForm.value.message,
        phone: this.contactForm.value.phoneNumber,
      });

      // Éxito
      this.showSuccessModal();
      this.contactForm.reset();

    } catch (error) {
      console.error('Error enviando email:', error);
      this.showErrorModal('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      this.isLoading = false;
    }
  }

  private showSuccessModal() {
    this.emailStatus = {
      success: true,
      message: 'Tu mensaje ha sido enviado correctamente. Te responderemos pronto.',
      details: 'Gracias por contactarnos'
    };
    this.showModal = true;
  }

  private showErrorModal(message: string) {
    this.emailStatus = {
      success: false,
      message: message,
      details: 'Si el problema persiste, contáctanos directamente'
    };
    this.showModal = true;
  }

  onModalClose() {
    this.showModal = false;
    this.emailStatus = null;
  }

  onModalPrimaryAction() {
    if (!this.emailStatus?.success) {
      // Si es error, reintentar
      this.send();
    }
  }

  onModalSecondaryAction() {
    // Acción secundaria si es necesaria
    console.log('Acción secundaria');
  }
}
