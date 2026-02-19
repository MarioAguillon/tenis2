import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// IMPORTANTE: Importamos el servicio aquí
import { CartService } from './services/cart.service'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    // AGREGAMOS el servicio aquí para que sea GLOBAL y no se borre
    CartService 
  ]
};