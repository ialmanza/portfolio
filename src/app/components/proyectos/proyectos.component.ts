import { Component } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  isImageZoomed = false;
  constructor() { }

  ingebilab() {
    window.open('https://ingebilab.netlify.app/', '_blank');
  }

  todoapp() {
    window.open('https://tareasparahacer.netlify.app/', '_blank');
  }

  onImageClickIngebilab() {
    this.isImageZoomed =!this.isImageZoomed;
    const imageElement = document.getElementById('ingebilabImage') as HTMLElement;
    if (this.isImageZoomed) {
      imageElement.classList.add('zoomed');
    } else {
      imageElement.classList.remove('zoomed');
    }
  }

  onImageClickToDoApp() {
    this.isImageZoomed =!this.isImageZoomed;
    const imageElement = document.getElementById('todoappImage') as HTMLElement;
    if (this.isImageZoomed) {
      imageElement.classList.add('zoomed');
    } else {
      imageElement.classList.remove('zoomed');
    }
  }
  verCodigoMyLab() {
    window.open('https://github.com/ialmanza/My_Lab', '_blank');
  }

  verCodigoToDoApp() {
    window.open('https://github.com/ialmanza/task_manager', '_blank');
  }
}

