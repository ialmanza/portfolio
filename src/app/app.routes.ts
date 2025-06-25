import { Routes } from '@angular/router';
import { ContactameComponent } from './components/contactame/contactame.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contactame', component: ContactameComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: PrincipalComponent }
];
