import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationComponent {
  public currentHref: string = "";

  constructor(private router: Router) {

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


}
