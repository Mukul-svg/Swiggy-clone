import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-popular-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent {
  // Array to hold popular categories, each with a name and image URL
  popularCategories: {
    name: string;
    imageUrl: string;
  }[] = [];

  constructor(private menuService: MenuService, private router: Router) { }

  // Loads popular categories from the MenuService when the component initializes
  ngOnInit(): void {
    this.popularCategories = this.menuService.getPopularCategories();
  }

  // Navigates to the explore page for the selected category
  navigateToExplore(categoryName: string): void {
    this.router.navigate(['/explore', categoryName]);
  }
}
