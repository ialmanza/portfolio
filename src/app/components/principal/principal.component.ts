import { Component } from '@angular/core';

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: []
})
export class PrincipalComponent {

  constructor() { }


  navegarAProyectos() {
    window.location.href = "/proyectos";
  }

}
