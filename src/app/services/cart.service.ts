import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private carrito: any[] = [];

  constructor() { }

  // Esta función arregla el error en contacto.ts (imagen 991c1c)
  obtenerCarrito() {
    return this.carrito;
  }

  // Esta función arregla el error en pedidos.ts (imagen 98c8ed)
  obtenerItems() {
    return this.carrito;
  }

  agregarProducto(producto: any) {
    this.carrito.push(producto);
  }

  eliminarProducto(producto: any) {
    this.carrito = this.carrito.filter(item => item.id !== producto.id);
  }

  limpiarCarrito() {
    this.carrito = [];
  }

  obtenerTotal() {
    return this.carrito.reduce((acc, item) => {
      // Quitamos el punto del precio "310.000" para poder sumar
      const precioNumerico = Number(item.precio.replace(/\./g, ''));
      return acc + precioNumerico;
    }, 0);
  }
}