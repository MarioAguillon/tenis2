import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './men.html',
  styleUrl: './men.css'
})
export class MenComponent {
  // Aquí están tus 8 productos con tus marcas originales
  zapatillas = [
    { id: 1, nombre: 'Adidas Running Blue', precio: '250.000', img: 'img/hombre1.jpg' },
    { id: 2, nombre: 'Reebok Classic White', precio: '280.000', img: 'img/hombre2.jpg' },
    { id: 3, nombre: 'Adidas Sport Black', precio: '300.000', img: 'img/hombre3.jpg' },
    { id: 4, nombre: 'Reebok Nano Training', precio: '320.000', img: 'img/hombre4.jpg' },
    { id: 5, nombre: 'Adidas Grand Court', precio: '240.000', img: 'img/hombre5.jpg' },
    { id: 6, nombre: 'Rebook Court Advance', precio: '260.000', img: 'img/hombre6.jpg' },
    { id: 7, nombre: 'Adidas Ultraboost', precio: '450.000', img: 'img/hombre7.jpg' },
    { id: 8, nombre: 'Reebok Club C 85', precio: '290.000', img: 'img/hombre8.jpg' }
  ];

  constructor(private router: Router, private cartService: CartService) {}

  irAPedidos(tenis: any) {
    this.cartService.agregarProducto(tenis); 
    this.router.navigate(['/pedidos']);
  }
}