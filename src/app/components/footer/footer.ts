import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // ESTO ES CLAVE

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink], // TIENE QUE ESTAR AQUÍ
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class footercomponent { }