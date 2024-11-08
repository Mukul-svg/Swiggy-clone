
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new Map<string, { item: any; quantity: number }>();
  private totalItemsCount = new BehaviorSubject<number>(0);
  totalItemsCount$ = this.totalItemsCount.asObservable();

  constructor() {
    this.loadCartFromStorage();  
  }
  //  method to load cart data from localStorage and initialize the cartItems map

  private loadCartFromStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      this.cartItems = new Map(parsedCart.map(([key, data]: [string, { item: any; quantity: number }]) => [key, data]));
      this.updateCartCount();  
    }
  }
  // Private method to save the current state of the cart to localStorage

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cartItems.entries())));
  }


  private getCartKey(itemId: number, restaurantId: number): string {
    return `${restaurantId}-${itemId}`;
  }

  addItem(item: any, quantity: number) {
    const key = this.getCartKey(item.id, item.restaurantId);
    this.cartItems.set(key, { item, quantity });
    this.updateCartCount();
    this.saveCartToStorage();
  }

  updateItemQuantity(item: any, quantity: number) {
    const key = this.getCartKey(item.id, item.restaurantId);
    if (this.cartItems.has(key)) {
      this.cartItems.set(key, { item, quantity });
      this.updateCartCount();
      this.saveCartToStorage();
    }
  }

  removeItem(item: any) {
    const key = this.getCartKey(item.id, item.restaurantId);
    this.cartItems.delete(key);
    this.updateCartCount();
    this.saveCartToStorage();
  }

  getItemQuantity(itemId: number, restaurantId: number): number {
    const key = this.getCartKey(itemId, restaurantId);
    return this.cartItems.has(key) ? this.cartItems.get(key)!.quantity : 0;
  }

  private updateCartCount() {
    let totalCount = 0;
    this.cartItems.forEach(({ quantity }) => (totalCount += quantity));
    this.totalItemsCount.next(totalCount);
  }

  clearCart() {
    this.cartItems.clear();             
    localStorage.removeItem('cart');     
    this.updateCartCount();              
  }

  getCartItems(): any[] {
    return Array.from(this.cartItems.entries()).map(([key, { item, quantity }]) => ({
      ...item,
      quantity
    }));
  }
 

  
}
