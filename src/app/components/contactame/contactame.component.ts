import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactame',
  standalone: true,
  imports: [ FormsModule, HttpClientModule ],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css'
})
export class ContactameComponent {

  formData = {
    name: '',
    email: '',
    message: '',
    recipientEmail: 'isra.almanzagonzalez@gmail.com'
  };

  constructor(private http: HttpClient) { }

  submitForm() {
    console.log(this.formData);
  }

  sendForm() {

    if (!this.formData.name ||!this.formData.email ||!this.formData.message ||!this.formData.recipientEmail) {
      console.error('Todos los campos son obligatorios');
      return; // Salir de la función si alguno de los campos es inválido
    }

    // Verificar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      console.error('Correo electrónico inválido');
      return; // Salir de la función si el correo electrónico no es válido
    }
    const formData = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
      recipientEmail: this.formData.recipientEmail
    };
    this.http.post('http://localhost:3000/send-email', formData).subscribe(
      response => {
        console.log('Correo enviado exitosamente', response);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al enviar el correo:', error);
        // Maneja el error, por ejemplo, mostrar un mensaje de error
      }
    );
  }

}
