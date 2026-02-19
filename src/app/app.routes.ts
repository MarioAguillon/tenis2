import { Routes } from '@angular/router';
import { MenComponent } from './pages/men/men';
import { WomenComponent } from './pages/women/women';
import { ChildrenComponent } from './pages/children/children';
import { ThenewComponent } from './pages/thenew/thenew';
import { PedidosComponent } from './pages/pedidos/pedidos';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lo-nuevo', component: ThenewComponent }, // Coincide con tu routerLink
  { path: 'hombre', component: MenComponent },      // Coincide con tu routerLink
  { path: 'mujer', component: WomenComponent },     // Coincide con tu routerLink
  { path: 'ninos', component: ChildrenComponent },  // Coincide con tu routerLink
  { path: 'pedidos', component: PedidosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];