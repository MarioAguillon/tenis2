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
  // 1. Variables de la clase
  productos: any[] = [];
  total: number = 0;
  nombre: string = '';
  direccion: string = '';
  telefono: string = '';
  ordenGenerada: any = null;
  intentoEnvio: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.actualizarVista();
  }

  actualizarVista() {
    // Asegúrate de que estos nombres existan en tu cart.service.ts
    this.productos = this.cartService.obtenerItems();
    this.total = this.cartService.obtenerTotal();
  }

  quitarTenis(p: any) {
    this.cartService.eliminarProducto(p);
    this.actualizarVista();
  }

  // 2. Función corregida (DENTRO de la clase)
  hacerPedido() {
    this.intentoEnvio = true;

    if (this.productos.length > 0 && this.nombre && this.direccion && this.telefono) {
      this.ordenGenerada = {
        n_pedido: Math.floor(Math.random() * 5000),
        cliente: {
          nombre: this.nombre,
          direccion: this.direccion,
          telefono: this.telefono
        },
        productos: this.productos,
        total_pagar: this.total,
        fecha_compra: new Date().toLocaleString()
      };

      // LÓGICA PARA DESCARGAR EL ARCHIVO
      const dataStr = JSON.stringify(this.ordenGenerada, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `pedido_${this.ordenGenerada.n_pedido}.json`;
      link.click();
      
      window.URL.revokeObjectURL(url);
      
      alert('¡Pedido descargado con éxito!');
      this.cartService.limpiarCarrito();
      this.actualizarVista();
    }
  }
} // <--- Esta llave debe ser la última del archivo