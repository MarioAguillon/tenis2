import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importamos las clases de tus componentes
import { Header } from './components/header/header'; 
import { Footer } from './components/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que tenga esto
  // 2. Agregamos Header y Footer aquí adentro
  imports: [RouterOutlet, Header, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tenis2');
}