import { Routes } from '@angular/router';
import { MenComponent } from './pages/men/men';
import { WomenComponent } from './pages/women/women';
import { ChildrenComponent } from './pages/children/children';
import { ThenewComponent } from './pages/thenew/thenew';
import { PedidosComponent } from './pages/pedidos/pedidos';
import { HomeComponent } from './pages/home/home';

// ESTA ES LA RUTA EXACTA SEGÚN TU IMAGEN:
import { PoliticasComponent } from './components/politicas/politicas'; 
import { TerminosComponent } from './components/terminos/terminos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lo-nuevo', component: ThenewComponent },
  { path: 'hombre', component: MenComponent },
  { path: 'mujer', component: WomenComponent },
  { path: 'ninos', component: ChildrenComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];