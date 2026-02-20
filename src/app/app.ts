import { Component } from '@angular/core';
import { RouterOutlet, } from '@angular/router'; // 1. Agregamos RouterLink aquí
import { Header } from './components/header/header'; 
import { footercomponent } from './components/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, footercomponent], // 2. Lo metemos en los imports
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App { }