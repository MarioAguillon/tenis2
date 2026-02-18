import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MenComponent } from './pages/men/men';
import { WomenComponent } from './pages/women/women';
import { ChildrenComponent } from './pages/children/children';
import { ThenewComponent } from './pages/thenew/thenew';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lo-nuevo', component: ThenewComponent },
  { path: 'hombre', component: MenComponent },
  { path: 'mujer', component: WomenComponent },
  { path: 'ninos', component: ChildrenComponent },
  { path: '**', redirectTo: '' } // Redirige al inicio si la ruta no existe
]