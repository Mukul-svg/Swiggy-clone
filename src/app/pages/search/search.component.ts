import { Component } from '@angular/core';
import { PopularCategoriesComponent } from "../../components/popular-categories/popular-categories.component";
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../restaurant.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RestaurantCardComponent } from "../../components/restaurant-card/restaurant-card.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [PopularCategoriesComponent, NgIf, NgFor, RouterLink, RouterLinkActive, RestaurantCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  filteredRestaurants: Restaurant[] = [];
  showPopularCategories: boolean = true; 

  constructor(private restaurantService: RestaurantService) {}
 
  // filter the restaurant list based on the search term. 
    
  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();    
    this.filteredRestaurants = this.restaurantService.filterByCategory(searchTerm);
    this.showPopularCategories = searchTerm === ''; 
  }
}
