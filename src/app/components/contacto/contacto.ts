import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  formulario: FormGroup;
  ordenFinal: any = null; // Aquí se guardará el JSON

  constructor(public cartService: CartService) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  generarJson() {
    if (this.formulario.valid) {
      const productos = this.cartService.obtenerCarrito();
      
      // Creamos la estructura del JSON que pide el profesor
      this.ordenFinal = {
        id_orden: Math.floor(Math.random() * 1000),
        fecha: new Date().toISOString(),
        cliente: this.formulario.value,
        productos: productos,
        total_items: productos.length
      };

      console.log('JSON de la Venta:', this.ordenFinal);
    } else {
      this.formulario.markAllAsTouched(); // Esto activa los mensajes rojos
    }
  }
}