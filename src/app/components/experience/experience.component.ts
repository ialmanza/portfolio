import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
experiences = [
    {
      id: 'exp-1',
      title: 'Desarrollador Back-End',
      company: 'Fyself SL, Abr 2025 - Actualidad',
      description: 'Desde abril de 2025 me desempeño como desarrollador back-end en Fyself, una empresa tecnológica con una arquitectura basada en microservicios. Participo activamente en el desarrollo y mantenimiento de servicios Back-End escritos en Java con Spring Boot, WebFlux, WebSockets y Python con Flask. Trabajo con una base de código compleja y distribuida en más de 16 microservicios, colaborando con otros equipos y siguiendo buenas prácticas de integración continua, control de versiones y documentación técnica. Me involucro tanto en la implementación de nuevas funcionalidades como en el análisis y mejora de servicios ya existentes.'
    },
    {
      id: 'exp-2',
      title: 'Investigador Adscripto SCA',
      company: 'Universidad de Belgrano, Sept 2024 - Actualidad ',
      description: 'Como desarrollador del proyecto SCA en la Universidad de Belgrano y en calidad de Investigador Adscripto, lidero el diseño e implementación completa del sistema utilizando Angular 18, TailwindCSS, Material Design y Bootstrap. Desarrollé interfaces profesionales, visualizaciones dinámicas con D3.js, autenticación y gestión de datos con Supabase, e internacionalización con ngx-translate en tres idiomas, Español, Inglés y Portugés. Además, colaboro en la investigación y aplicación de buenas prácticas en ingeniería de software, contribuyendo al desarrollo académico y tecnológico del proyecto.'
    },
    {
      id: 'exp-3',
      title: 'Desarrollador Full Stack',
      company: 'Clandestino 2024 - 2025',
      description: 'Desarrollé un sistema de inventario para la gestión de productos, abarcando el diseño de interfaces con Angular y la implementación de funcionalidades CRUD. Creé endpoints con Node.js y Express, integrando MongoDB para garantizar la persistencia y consistencia de los datos. Diseñé tablas dinámicas con filtrado avanzado y aseguré una experiencia de usuario eficiente mediante pruebas y optimizaciones continuas.'
    },
    {
      id: 'exp-4',
      title: 'Desarrollador de software',
      company: 'Software de Centro de Recreación, Nov 2023 - Ene 2024',
      description: 'Formé parte de un equipo de desarrollo de un sistema de gestión para un centro de recreación, donde se implementaron funciones clave como la creación de ventas, gestión de pagos y visualización de productos. Los usuarios podían agregar productos a un carrito de compras y realizar transacciones de manera eficiente. Utilicé un stack tecnológico compuesto por Angular, HTML, CSS, Bootstrap, JavaScript y TypeScript durante un período de tres meses.'
    }
  ];

  goBack(): void {
    window.history.back();
  }

  scrollToDescription(expId: string): void {
    const element = document.getElementById(expId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      // Agregar un efecto visual temporal
      element.style.backgroundColor = '#f0f8ff';
      setTimeout(() => {
        element.style.backgroundColor = '';
      }, 2000);
    }
  }
}
