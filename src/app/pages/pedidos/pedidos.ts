import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css'
})
export class PedidosComponent implements OnInit {
  productos: any[] = [];
  total: number = 0;
  
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Forzamos la carga de datos al iniciar el componente
    this.productos = this.cartService.obtenerItems();
    this.total = this.cartService.obtenerTotal();
    console.log('Productos en el carrito al cargar Pedidos:', this.productos);
  }

  actualizarVista() {
    this.productos = this.cartService.obtenerItems();
    this.total = this.cartService.obtenerTotal();
  }

  quitarTenis(p: any) {
    this.cartService.eliminarProducto(p);
    this.actualizarVista();
  }

  hacerPedido() {
    if (this.productos.length === 0) {
      alert("No tienes tenis en tu lista.");
      return;
    }
    if (!this.nombre || !this.direccion || !this.telefono) {
      alert("Por favor, llena tus datos para el envío.");
      return;
    }
    alert(`¡Pedido confirmado por $${this.total.toLocaleString('es-CO')}!`);
    this.cartService.limpiarCarrito();
    this.actualizarVista();
  }
}