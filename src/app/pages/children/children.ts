import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './children.html',
  styleUrl: './children.css'
})
export class ChildrenComponent { }