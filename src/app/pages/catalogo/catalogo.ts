import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Importamos el Router
import { ProductosService } from '../../services/productos';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent implements OnInit {
  // 2. Inyectamos los servicios necesarios
  private _productosService = inject(ProductosService);
  private _cartService = inject(CartService);
  private _router = inject(Router); // Inyección del Router para navegar

  listaTotal: any[] = [];

  ngOnInit() {
    // 3. Al cargar, pedimos los datos al script centralizado
    this.listaTotal = this._productosService.obtenerCatalogoTotal();
  }

  // 4. Función mejorada: agrega y redirige
  comprar(item: any) {
    this._cartService.agregarProducto(item); // Guarda el producto en el carrito
    this._router.navigate(['/pedidos']);    // Nos lleva a la página de pedidos sin alert
  }
}