// explore.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuService } from '../../services/menu.service';
import { Restaurant } from '../../restaurant.model';
import { RestaurantCardComponent } from "../../components/restaurant-card/restaurant-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-explore',
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  imports: [RestaurantCardComponent,NgFor]
})
export class ExploreComponent implements OnInit {
  category: string | null = null;
  categoryQuote: string | null = null;
  filteredRestaurants: Restaurant[] = [];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private restaurantService: RestaurantService
  ) {}

    // Subscribe to the route parameters to get the category value from the URL
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      if (this.category) {
        this.categoryQuote = this.menuService.getCategoryQuote(this.category);
        this.filteredRestaurants = this.restaurantService.getRestaurantsByCategory(this.category);
      }
    });
  }
}
