import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.html',
  styleUrl: './women.css'
})
export class WomenComponent {
  // Asegúrate de que este nombre sea el mismo que usas en el @for del HTML
  zapatillas = [
    { id: 1, nombre: 'Clásicos de rebooking', precio: '310.000', img: '/img/mujer1.jpg' },
    { id: 2, nombre: 'Adidas SuprStart', precio: '295.000', img: '/img/mujer2.jpg' },
    { id: 3, nombre: 'Adidas Running', precio: '280.000', img: '/img/mujer3.jpg' },
    { id: 4, nombre: 'Adidas Naranja', precio: '320.000', img: '/img/mujer4.jpg' },
    { id: 5, nombre: 'Adidas Londres', precio: '350.000', img: '/img/mujer5.jpg' },
    { id: 6, nombre: 'Volver a reservar Princesa', precio: '275.000', img: '/img/mujer6.jpg' },
    { id: 7, nombre: 'Rebook Leather', precio: '380.000', img: '/img/mujer7.jpg' },
    { id: 8, nombre: 'Club de reservas C 85', precio: '260.000', img: '/img/mujer8.jpg' }
  ];

  constructor(private router: Router, private cartService: CartService) {}

  irAPedidos(tenis: any) {
    this.cartService.agregarProducto(tenis);
    this.router.navigate(['/pedidos']);
  }
}