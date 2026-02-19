import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    // Agregamos una copia del producto para que no haya problemas de referencia
    this.items.push({ ...producto, instanceId: Date.now() + Math.random() });
  }

  obtenerItems() {
    return this.items;
  }

  // NUEVA FUNCIÓN: Para eliminar un tenis específico de la lista
  eliminarProducto(producto: any) {
    this.items = this.items.filter(item => item.instanceId !== producto.instanceId);
    return this.items;
  }

  // NUEVA FUNCIÓN: Suma todos los precios
  obtenerTotal() {
    return this.items.reduce((acc, item) => {
      // Quitamos el punto del precio (ej: "150.000" -> 150000) para poder sumar
      const precioNumerico = parseFloat(item.precio.replace(/\./g, ''));
      return acc + precioNumerico;
    }, 0);
  }

  limpiarCarrito() {
    this.items = [];
    return this.items;
  }
}