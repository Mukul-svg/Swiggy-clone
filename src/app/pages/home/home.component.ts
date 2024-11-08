

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { RestaurantCardComponent } from "../../components/restaurant-card/restaurant-card.component";
import { NgFor } from '@angular/common';
import { Restaurant } from '../../restaurant.model';
import { PopularCategoriesComponent } from "../../components/popular-categories/popular-categories.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RestaurantCardComponent, NgFor, PopularCategoriesComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }
}
