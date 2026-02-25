import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Esta es la base de datos centralizada de DUO SPORT
  private inventarioGeneral = [
    // --- HOMBRE (MEN) ---
    { id: 1, nombre: 'Adidas Running Blue', precio: '250.000', img: 'img/hombre1.jpg', cat: 'Hombre' },
    { id: 2, nombre: 'Reebok Classic White', precio: '280.000', img: 'img/hombre2.jpg', cat: 'Hombre' },
    { id: 3, nombre: 'Adidas Sport Black', precio: '300.000', img: 'img/hombre3.jpg', cat: 'Hombre' },
    { id: 4, nombre: 'Reebok Nano Training', precio: '320.000', img: 'img/hombre4.jpg', cat: 'Hombre' },
    { id: 5, nombre: 'Adidas Grand Court', precio: '240.000', img: 'img/hombre5.jpg', cat: 'Hombre' },
    { id: 6, nombre: 'Rebook Court Advance', precio: '260.000', img: 'img/hombre6.jpg', cat: 'Hombre' },
    { id: 7, nombre: 'Adidas Ultraboost', precio: '450.000', img: 'img/hombre7.jpg', cat: 'Hombre' },
    { id: 8, nombre: 'Reebok Club C 85', precio: '290.000', img: 'img/hombre8.jpg', cat: 'Hombre' },

    // --- MUJER (WOMEN) ---
    { id: 9, nombre: 'Clásicos de rebooking', precio: '310.000', img: 'img/mujer1.jpg', cat: 'Mujer' },
    { id: 10, nombre: 'Adidas SuprStart', precio: '295.000', img: 'img/mujer2.jpg', cat: 'Mujer' },
    { id: 11, nombre: 'Adidas Running', precio: '280.000', img: 'img/mujer3.jpg', cat: 'Mujer' },
    { id: 12, nombre: 'Adidas Naranja', precio: '320.000', img: 'img/mujer4.jpg', cat: 'Mujer' },
    { id: 13, nombre: 'Adidas Londres', precio: '350.000', img: 'img/mujer5.jpg', cat: 'Mujer' },
    { id: 14, nombre: 'Volver a reservar Princesa', precio: '275.000', img: 'img/mujer6.jpg', cat: 'Mujer' },
    { id: 15, nombre: 'Rebook Leather', precio: '380.000', img: 'img/mujer7.jpg', cat: 'Mujer' },
    { id: 16, nombre: 'Club de reservas C 85', precio: '260.000', img: 'img/mujer8.jpg', cat: 'Mujer' },

    // --- NIÑOS (CHILDREN) ---
    { id: 17, nombre: 'Adidas Kids Red', precio: '150.000', img: 'img/ninos1.jpg', cat: 'Niños' },
    { id: 18, nombre: 'Adidas Grant Court', precio: '145.000', img: 'img/ninos2.jpg', cat: 'Niños' },
    { id: 19, nombre: 'Adidas Campus Kids', precio: '160.000', img: 'img/ninos3.jpg', cat: 'Niños' },
    { id: 20, nombre: 'Adidas SuperStart', precio: '130.000', img: 'img/ninos4.jpg', cat: 'Niños' },
    { id: 21, nombre: 'Reebok Club C', precio: '175.000', img: 'img/ninos5.jpg', cat: 'Niños' },
    { id: 22, nombre: 'Rebook Court Advance', precio: '155.000', img: 'img/ninos6.jpg', cat: 'Niños' },
    { id: 23, nombre: 'Rebbok Running', precio: '140.000', img: 'img/ninos7.jpg', cat: 'Niños' },
    { id: 24, nombre: 'Adidas Grand Blue', precio: '165.000', img: 'img/ninos8.jpg', cat: 'Niños' },

    // --- NOVEDADES (THE NEW) ---
    { id: 25, nombre: 'Phantom v1', precio: '450.000', img: 'img/new1.jpg', cat: 'Lo Nuevo' },
    { id: 26, nombre: 'Carbon Pro', precio: '520.000', img: 'img/new2.jpg', cat: 'Lo Nuevo' },
    { id: 27, nombre: 'Gravity Blue', precio: '380.000', img: 'img/new3.jpg', cat: 'Lo Nuevo' },
    { id: 28, nombre: 'Solar Flare', precio: '410.000', img: 'img/new4.jpg', cat: 'Lo Nuevo' }
  ];

  constructor() { }

  // Esta es la función que usarás para inyectar la información
  obtenerCatalogoTotal() {
    return this.inventarioGeneral;
  }
}