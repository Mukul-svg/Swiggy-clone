

import { Component, Input } from '@angular/core';
import { Restaurant } from '../../restaurant.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'] 
})
export class RestaurantCardComponent {
  @Input() restaurant!: Restaurant; 
}
