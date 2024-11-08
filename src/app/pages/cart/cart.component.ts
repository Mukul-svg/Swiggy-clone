import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router'; 
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  user: { name: string, email: string } | null = null;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.fetchUserData();
    if (this.user) {
      this.loadCartItems();
    }
  }
  fetchUserData() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }
  loadCartItems() {
    this.cartItems = this.cartService.getCartItems(); 
  }

  removeFromCart(item: any) {
    this.cartService.removeItem(item);
    this.loadCartItems(); 
  }

  increaseQuantity(item: any) {
    this.cartService.updateItemQuantity(item, item.quantity + 1);
    this.loadCartItems();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      this.cartService.updateItemQuantity(item, item.quantity - 1);
      this.loadCartItems(); 
    } else {
      this.removeFromCart(item); 
    }
  }

  clearCartData() {
    this.cartService.clearCart(); 
    this.loadCartItems(); 
  }
  // Redirects the user to the sign-in page if they are not logged in
  redirectToSignIn() {
    this.router.navigate(['/signin']);
  }
}
