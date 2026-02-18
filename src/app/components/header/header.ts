import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas básicas
import { RouterModule } from '@angular/router'; // ¡ESTE ES EL IMPORTANTE!

@Component({
  selector: 'app-header',
  standalone: true, // Asegúrate de que diga esto si no lo tiene
  imports: [CommonModule, RouterModule], // <--- Agregamos estos dos aquí
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Aquí puedes crear lógica después, por ahora está perfecto así.
}