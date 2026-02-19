import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './children.html',
  styleUrl: './children.css'
})
export class ChildrenComponent {
  zapatillas = [
    { id: 1, nombre: 'Rebook Kids Red', precio: '150.000', img: 'img/ninos1.jpg' },
    { id: 2, nombre: 'Adidas Grant Court', precio: '145.000', img: 'img/ninos2.jpg' },
    { id: 3, nombre: 'Adidas Campus Kids', precio: '160.000', img: 'img/ninos3.jpg' },
    { id: 4, nombre: 'adidas SuperStart Cars', precio: '130.000', img: 'img/ninos4.jpg' },
    { id: 5, nombre: 'Rebook Club C', precio: '175.000', img: 'img/ninos5.jpg' },
    { id: 6, nombre: 'Rebook Court Advance', precio: '155.000', img: 'img/ninos6.jpg' },
    { id: 7, nombre: 'Rebbok Running', precio: '140.000', img: 'img/ninos7.jpg' },
    { id: 8, nombre: 'Adidas Grand Blue', precio: '165.000', img: 'img/ninos8.jpg' }
  ];

  constructor(private router: Router) {}

  irAPedidos() {
    this.router.navigate(['/pedidos']);
  }
}