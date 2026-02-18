import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men.html',
  styleUrl: './men.css'
})
export class MenComponent {
  // 1. ESTA ES LA LISTA. Aquí cambias los datos de cada uno:
  zapatillas = [
    { id: 1, nombre: 'Nike Air Max', precio: '350.000', img: 'img/hombre1.jpg' },
    { id: 2, nombre: 'Adidas Ultra', precio: '420.000', img: 'img/hombre2.jpg' },
    { id: 3, nombre: 'Puma Speed', precio: '280.000', img: 'img/hombre3.jpg' },
    { id: 4, nombre: 'Reebok Classic', precio: '190.000', img: 'img/hombre4.jpg' },
    { id: 5, nombre: 'Jordan Retro', precio: '550.000', img: 'img/hombre5.jpg' },
    { id: 6, nombre: 'Under Armour', precio: '240.000', img: 'img/hombre6.jpg' },
    { id: 7, nombre: 'Asics Gel', precio: '310.000', img: 'img/hombre7.jpg' },
    { id: 8, nombre: 'New Balance', precio: '330.000', img: 'img/hombre8.jpg' }
  ];

  constructor(private router: Router) {}

  irAPedidos() {
    this.router.navigate(['/pedidos']);
  }
}