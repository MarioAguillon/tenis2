import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Importante para navegar

@Component({
  selector: 'app-thenew',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thenew.html',
  styleUrl: './thenew.css'
})
export class ThenewComponent {
  
  // 1. Aquí definimos los productos nuevos que se verán en la página
  novedades = [
    { id: 1, nombre: 'Phantom v1', precio: '450.000', img: 'img/new1.jpg' },
    { id: 2, nombre: 'Carbon Pro', precio: '520.000', img: 'img/new2.jpg' },
    { id: 3, nombre: 'Gravity Blue', precio: '380.000', img: 'img/new3.jpg' },
    { id: 4, nombre: 'Solar Flare', precio: '410.000', img: 'img/new4.jpg' }
  ];

  // 2. Inyectamos el router en el constructor
  constructor(private router: Router) {}

  // 3. Función para que el botón envíe a la página de pedidos
  irAPedidos() {
    this.router.navigate(['/pedidos']);
  }
}