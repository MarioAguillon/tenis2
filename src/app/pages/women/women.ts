import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './women.html', // Verifica que el archivo se llame así
  styleUrl: './women.css'
})
export class WomenComponent { }