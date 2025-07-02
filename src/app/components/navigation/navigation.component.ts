import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationComponent {
  public currentHref: string = "";
  isMenuOpen: boolean = false;

  constructor(private router: Router, private renderer: Renderer2) {

    this.currentHref = "/principal";
  }

  navegar(){
    this.router.navigate(['/sobre-mi']);
  }

  navegarAProyectos(){
    this.router.navigate(['/proyectos']);
  }

  navegarAContactame(){
    this.router.navigate(['/contactame']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'menu-open');
    } else {
      this.renderer.removeClass(document.body, 'menu-open');
    }
  }

  descargarCV() {
    const link = document.createElement('a');
    link.href = 'assets/Israel Alamanza Curriculm Vitae.pdf';
    link.download = 'Israel Alamanza Curriculm Vitae.pdf';
    link.target = '_blank';

    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });

    link.dispatchEvent(event);
  }

}
