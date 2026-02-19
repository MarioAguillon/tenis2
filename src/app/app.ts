import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'; 
import { footercomponent } from './components/footer/footer'; // Asegúrate que esta ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, footercomponent],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App { }