import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule, NgIf } from '@angular/common';
import { SigninComponent } from '../../pages/signin/signin.component';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SigninComponent, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  cartCount = 0;
  user: { name: string, email: string } | null = null;
  isMobileMenuOpen = false;

  constructor(private cartService: CartService, private router: Router) {}


  ngOnInit() {
    this.cartService.totalItemsCount$.subscribe((count) => {
      this.cartCount = count;
    });
    
    this.fetchUserData();
  }

  
  ngDoCheck() {
    this.fetchUserData(); 
  }

  // Fetches and parses user data from localStorage if available
  fetchUserData() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
