import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  profileData = {
    name: 'Israel Almanza',
    title: 'Desarrollador de Software',
    subtitle: 'Apasionado por construir soluciones innovadoras',
    profileImage: '/assets/Israel Almanza.jpeg',
    description: `Soy un desarrollador de software experimentado con al menos 3 años  de experiencia comprobable en el desarrollo y mantenimiento de aplicaciones de alta calidad. Mi especialidad es el desarrollo integral, con un enfoque en la creación de soluciones escalables y eficientes. Me apasiona mantenerme al día con las últimas tecnologías y mejorar continuamente mis habilidades.`
  };

  // Educación
  education = {
    degree: 'Técnico en Programación de Compuitadoras, Universidad de Belgrano',
    period: '2023 - 2025',
    description: 'Finalicé la Tecnicatura en Programación de Computadoras en la Universidad de Belgrano, con especialización en desarrollo de software, algoritmos y estructuras de datos. Este programa está fortaleció mis habilidades técnicas y me proporcionó una base sólida en los principios de la programación.'
  };

  education2 = {
    degree: 'Programación en Python , Universidad Nacional de San Martín',
    period: 'Agosto 2021 - Noviembre 2021',
    description: 'Aprendí los principios fundamentales de la programación en Python, aplicados al análisis de datos. Trabajé con bibliotecas como Pandas para la manipulación y análisis de datos, NumPy para el manejo eficiente de arreglos y matrices, y Matplotlib para la creación de gráficos y visualizaciones. También adquirí experiencia en la lectura y escritura de archivos utilizando Pandas.'
  };

  constructor(private location: Location) {
    console.log('Profile image path:', this.profileData.profileImage);
  }

  // Método para manejar errores de carga de imagen
  onImageError(event: any): void {
    console.error('Error loading image:', event);
    console.log('Attempted to load:', this.profileData.profileImage);
  }

}
