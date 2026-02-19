import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    // Guardamos el tenis con un ID único para poder borrarlo luego
    this.items.push({ ...producto, instanceId: Date.now() + Math.random() });
  }

  obtenerItems() {
    return this.items;
  }

  eliminarProducto(producto: any) {
    this.items = this.items.filter(item => item.instanceId !== producto.instanceId);
    return this.items;
  }

  obtenerTotal() {
    return this.items.reduce((acc, item) => {
      // Convierte "150.000" en número 150000 para sumar
      const precioNumerico = parseFloat(item.precio.replace(/\./g, ''));
      return acc + precioNumerico;
    }, 0);
  }

  limpiarCarrito() {
    this.items = [];
    return this.items;
  }
}