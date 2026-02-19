import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Asegura esta ruta

@Component({
  selector: 'app-thenew',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thenew.html',
  styleUrl: './thenew.css'
})
export class ThenewComponent {
  
  novedades = [
    { id: 1, nombre: 'Phantom v1', precio: '450.000', img: 'img/new1.jpg' },
    { id: 2, nombre: 'Carbon Pro', precio: '520.000', img: 'img/new2.jpg' },
    { id: 3, nombre: 'Gravity Blue', precio: '380.000', img: 'img/new3.jpg' },
    { id: 4, nombre: 'Solar Flare', precio: '410.000', img: 'img/new4.jpg' }
  ];

  constructor(private router: Router, private cartService: CartService) {}

  irAPedidos(item: any) {
    this.cartService.agregarProducto(item);
    this.router.navigate(['/pedidos']);
  }
}