import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../menu-item.model';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';  
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem!: MenuItem; 
  inCart = false; 
  quantity = 0; 
  cartItems: any[] = []; 

  constructor(private cartService: CartService, private router: Router) {}

  // Checks if the item is already in the cart when the component initializes
  ngOnInit() {
    const initialQuantity = this.cartService.getItemQuantity(this.menuItem.id, this.menuItem.restaurantId);
    if (initialQuantity > 0) {
      this.inCart = true;
      this.quantity = initialQuantity;
    }
  }

  // Adds the item to the cart, and redirects to sign-in if the user is not logged in
  addToCart() {
    const user = localStorage.getItem('user');
    
    if (!user) {
      this.router.navigate(['/signin'], { queryParams: { redirectTo: 'cart' } });
      return; 
    }

    this.inCart = true;
    this.quantity = 1;
    this.cartService.addItem(this.menuItem, this.quantity);
  }

  
  increaseQuantity() {
    this.quantity++;
    this.cartService.updateItemQuantity(this.menuItem, this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.cartService.updateItemQuantity(this.menuItem, this.quantity);
    } else {
      this.inCart = false;
      this.quantity = 0;
      this.cartService.removeItem(this.menuItem);
    }
  }
}
