import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';



@Component({
  selector: 'app-contactame',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css'
})
export class ContactameComponent {
  contactForm: FormGroup;

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
    console.log(this.contactForm.value);
  }
  async send(){
    emailjs.init('okEjA9dn2w_9EpoeX');
    let response = await emailjs.send("service_hnxkumu","template_h7iuj6w",{
      from_name: this.contactForm.value.firstName,
      to_name: "pocholo",
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      message: this.contactForm.value.message,
      phone: this.contactForm.value.phoneNumber,
      });

      alert("El mensaje se envió correctamente");
      this.contactForm.reset();

  }
}
