import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule here
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: any[] = [];

  ngOnInit(): void {
    this.loadFavourites();
  }

  loadFavourites() {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
      this.favourites = JSON.parse(storedFavourites);
    }
  }

  removeFromFavourites(item: any) {
    this.favourites = this.favourites.filter(fav => fav.id !== item.id);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }
}
