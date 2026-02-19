import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html', // Cambiado: antes decía footer.component.html
  styleUrl: './footer.css'      // Cambiado: antes decía footer.component.css
})
export class footercomponent { }