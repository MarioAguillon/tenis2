import { Routes } from '@angular/router';
import { MenComponent } from './pages/men/men';
import { WomenComponent } from './pages/women/women';
import { ChildrenComponent } from './pages/children/children';
import { ThenewComponent } from './pages/thenew/thenew';
import { PedidosComponent } from './pages/pedidos/pedidos';
import { HomeComponent } from './pages/home/home';

// IMPORTAMOS EL NUEVO CATÁLOGO
import { CatalogoComponent } from './pages/catalogo/catalogo'; 

// TUS COMPONENTES LEGALES
import { PoliticasComponent } from './components/politicas/politicas'; 
import { TerminosComponent } from './components/terminos/terminos';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lo-nuevo', component: ThenewComponent },
  { path: 'hombre', component: MenComponent },
  { path: 'mujer', component: WomenComponent },
  { path: 'ninos', component: ChildrenComponent },
  { path: 'pedidos', component: PedidosComponent },
  
  // NUEVA RUTA PARA EL CATÁLOGO QUE USA EL SERVICE
  { path: 'catalogo', component: CatalogoComponent }, 

  { path: 'politicas', component: PoliticasComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];