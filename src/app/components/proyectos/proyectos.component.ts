import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Tecnologia {
  nombre: string;
  icono: string;
}

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  estado?: string;
  imagen: string;
  tecnologias: Tecnologia[];
  enlaceDemo?: string;
  enlaceCodigo?: string;
  enlaceAdmin?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  isImageZoomed = false;
   proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: 'CoreVit Studio',
      descripcion: 'Aplicación web en desarrollo.',
      estado: 'En desarrollo',
      imagen: 'assets/corevitstudio.png',
      tecnologias: [
        { nombre: 'HTML', icono: 'assets/icons/html.png' },
        { nombre: 'CSS', icono: 'assets/icons/css-3.png' },
        { nombre: 'TypeScript', icono: 'assets/icons/typescript.png' },
        { nombre: 'Bootstrap', icono: 'assets/icons/bootstrap.png' },
        { nombre: 'Tailwinds', icono: 'assets/icons/tailwinds.png' },
        { nombre: 'Angular', icono: 'assets/icons/angular.png' }
      ],
      enlaceDemo: 'https://corevitstudio.netlify.app/'
    },
    {
      id: 2,
      titulo: 'Restaurante',
      descripcion: 'Aplicación web completa para gestionar la presencia online de un restaurante.',
      estado: 'Refactorización en curso',
      imagen: 'assets/restaurante.png',
      tecnologias: [
        { nombre: 'HTML', icono: 'assets/icons/html.png' },
        { nombre: 'CSS', icono: 'assets/icons/css-3.png' },
        { nombre: 'TypeScript', icono: 'assets/icons/typescript.png' },
        { nombre: 'Bootstrap', icono: 'assets/icons/bootstrap.png' },
        { nombre: 'Tailwinds', icono: 'assets/icons/tailwinds.png' },
        { nombre: 'Angular', icono: 'assets/icons/angular.png' },
        { nombre: 'Supabase', icono: 'assets/icons/supabase.png' }
      ],
      enlaceDemo: 'https://gestiondereservas.netlify.app/',
      enlaceCodigo: 'https://github.com/ialmanza/gestion-de-reservas',
      enlaceAdmin: 'https://gestiondereservas.netlify.app/admin'
    },
    {
      id: 3,
      titulo: 'Gestión de Veterinaria',
      descripcion: 'Aplicación web completa para gestionar una veterinaria.',
      imagen: 'assets/veterinaria.png',
      tecnologias: [
        { nombre: 'HTML', icono: 'assets/icons/html.png' },
        { nombre: 'CSS', icono: 'assets/icons/css-3.png' },
        { nombre: 'TypeScript', icono: 'assets/icons/typescript.png' },
        { nombre: 'Bootstrap', icono: 'assets/icons/bootstrap.png' },
        { nombre: 'Tailwinds', icono: 'assets/icons/tailwinds.png' },
        { nombre: 'Angular', icono: 'assets/icons/angular.png' },
        { nombre: 'Supabase', icono: 'assets/icons/supabase.png' }
      ],
      enlaceDemo: 'https://gestionarveterinaria.netlify.app/',
      enlaceCodigo: 'https://github.com/ialmanza/veterinaria_backup'
    },
    {
      id: 4,
      titulo: 'Calisthenics',
      descripcion: 'Aplicación web en desarrollo.',
      estado: 'En desarrollo',
      imagen: 'assets/calistenia.webp',
      tecnologias: [
        { nombre: 'HTML', icono: 'assets/icons/html.png' },
        { nombre: 'CSS', icono: 'assets/icons/css-3.png' },
        { nombre: 'TypeScript', icono: 'assets/icons/typescript.png' },
        { nombre: 'Tailwinds', icono: 'assets/icons/tailwinds.png' },
        { nombre: 'Angular', icono: 'assets/icons/angular.png' },
        { nombre: 'Supabase', icono: 'assets/icons/supabase.png' }
      ],
      enlaceDemo: 'https://calisthenicsflow.netlify.app/'
    },
  ];

  constructor(private router: Router) { }


  corevit(): void {
    window.open(this.proyectos[0].enlaceDemo, '_blank');
  }

  restaurante(): void {
    window.open(this.proyectos[1].enlaceDemo, '_blank');
  }

  restauranteAdministrativo(): void {
    window.open(this.proyectos[1].enlaceAdmin, '_blank');
  }

  veterinaria(): void {
    window.open(this.proyectos[2].enlaceDemo, '_blank');
  }

  calistenia(): void {
    window.open(this.proyectos[3].enlaceDemo, '_blank');
  }

  verCodigoRestaurante(): void {
    window.open(this.proyectos[1].enlaceCodigo, '_blank');
  }

  verCodigoVeterianria(): void {
    window.open(this.proyectos[2].enlaceCodigo, '_blank');
  }


  getProjectMethod(projectId: number, action: string): void {
    switch (projectId) {
      case 1:
        if (action === 'demo') this.corevit();
        break;
      case 2:
        if (action === 'demo') this.restaurante();
        if (action === 'codigo') this.verCodigoRestaurante();
        if (action === 'admin') this.restauranteAdministrativo();
        break;
      case 3:
        if (action === 'demo') this.veterinaria();
        if (action === 'codigo') this.verCodigoVeterianria();
        break;
      case 4:
        if (action === 'demo') this.calistenia();
        break;
    }
  }
}

