import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItemService } from '../../services/menu-item.service';
import { MenuItem } from '../../menu-item.model';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [NgIf,MenuItemComponent,NgFor],
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css'] 
})
export class RestaurantDetailComponent implements OnInit { 
  restaurant: Restaurant | undefined;
  menuItems: MenuItem[] = [];
  filteredMenuItems: MenuItem[] = [];


  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private menuService: MenuItemService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
            // Fetch the restaurant details using the ID
      const numericId = Number(id); 
      this.restaurant = this.restaurantService.getRestaurantById(numericId);
      this.menuItems = this.menuService.getMenuItemsByRestaurantId(numericId); 

    }
  }
  
}
