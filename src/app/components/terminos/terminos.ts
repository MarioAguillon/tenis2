import { Component } from '@angular/core';

@Component({
  selector: 'app-terminos',
  standalone: true,
  template: `
    <div style="padding: 40px; max-width: 900px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h1 style="color: #1a4b70; border-bottom: 2px solid #1a4b70; padding-bottom: 10px;">Términos y Condiciones de Uso</h1>

      <p>Bienvenido a <strong>DUO SPORT</strong>. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones establecidos para garantizar una experiencia de compra segura y transparente.</p>

      <h3 style="color: #1a4b70;">1. Objeto del Sitio</h3>
      <p>Este sitio web es una plataforma de comercio electrónico dedicada a la venta de calzado deportivo de marcas reconocidas. El uso del sitio está condicionado a la aceptación total de estos términos.</p>

      <h3 style="color: #1a4b70;">2. Precios y Disponibilidad</h3>
      <p>Todos los precios mostrados en DUO SPORT incluyen los impuestos de ley vigentes en Colombia. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso. La disponibilidad de los productos (como los Adidas Campus Kids) está sujeta al inventario real.</p>

      <h3 style="color: #1a4b70;">3. Proceso de Compra</h3>
      <p>Al hacer clic en "Confirmar Compra", el usuario se compromete a realizar el pago correspondiente y a proporcionar datos de envío verídicos. DUO SPORT no se hace responsable por retrasos causados por direcciones incorrectas proporcionadas por el cliente.</p>

      <h3 style="color: #1a4b70;">4. Devoluciones</h3>
      <p>El cliente tiene derecho a solicitar cambios o devoluciones dentro de los tiempos legales establecidos, siempre que el calzado se encuentre en perfecto estado y en su empaque original.</p>
    </div>
  `
})
export class TerminosComponent {}