import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.css',
    imports: [FooterComponent]
})
export class PrincipalComponent {

  constructor() { }


  navegarAProyectos() {
    window.location.href = "/proyectos";
  }

}
