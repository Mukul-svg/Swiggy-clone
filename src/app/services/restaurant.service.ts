import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
        id: 1,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a0726fc0-7380-4a6e-ba39-ad82f92e92d2_217542.jpg',
        offer: '50% off up to ₹100',
        name: 'Pizza Palace',
        rating: 4.3,
        categories: ['Pizza','Burger','Chinese','Pasta'],
        location: 'Sector 22',
        timing: '30-35 mins'
    },
    {
        id: 2,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_75279.JPG',
        offer: '40% off up to ₹80',
        name: 'Burger House',
        rating: 4.5,
        categories: ['Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'MG Road',
        timing: '20-25 mins'
    },
    {
        id: 3,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/8/79bd59ae-ce72-4b12-80fe-21c77ee628d1_236656.jpg',
        offer: '30% off up to ₹50',
        name: 'Sushi World',
        rating: 4.7,
        categories: ['Poori','Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Downtown',
        timing: '15-20 mins'
    },
    {
        id: 4,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/06505d5f2f7b5dd44acf286d2f721b43',
        offer: '25% off on orders above ₹500',
        name: 'Taco Town',
        rating: 4.6,
        categories: ['Noodles','Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Main Street',
        timing: '20-30 mins'
    },
    {
        id: 5,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l6o20uhfd91hajpodtou',
        offer: '60% off on selected items',
        name: 'Pasta Place',
        rating: 4.4,
        categories: ['North Indian','Ice Cream','Noddles','Momos'],
        location: 'West End',
        timing: '25-30 mins'
    },
    {
        id: 6,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/e355aa6b-bc56-4d39-ac2b-a657033916c2_375130.JPG',
        offer: 'Buy 1 Get 1 Free',
        name: 'Curry House',
        rating: 4.2,
        categories: ['North Indian','Chinese','Momos','Pasta','Noodles','Rolls','Burger','Cake','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'East Side',
        timing: '30-40 mins'
    },
    {
        id: 7,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bezmifo4atzxevyxmasn',
        offer: '40% off on first order',
        name: 'Sandwich Station',
        rating: 4.1,
        categories: ['North Indian','Chinese','Momos','Pasta','Noodles','Rolls','Burger','Cake','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'Central Park',
        timing: '15-25 mins'
    },
    {
        id: 8,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ekh3zfwz39sjiabbnmqr',
        offer: '50% off on family packs',
        name: 'BBQ Nation',
        rating: 4.8,
        categories: ['Kebabs','Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'], 
        location: 'North Avenue',
        timing: '25-35 mins'
    },
    {
        id: 9,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/9/f4da1dc2-1e39-4c9a-96c2-4867f4051571_906096.JPG',
        offer: '70% off on select dishes',
        name: 'Dessert Delights',
        rating: 4.9,
        categories: ['Paratha','Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Market Square',
        timing: '10-15 mins'
    },
    {
        id: 10,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/37c34ea9-5f3c-442c-a540-f047e8e808e0_931448.jpg',
        offer: '20% off on all items',
        name: 'Salad Shack',
        rating: 4.0,
        categories: ['Poha','Cake','Poori','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Health Street',
        timing: '15-20 mins'
    },
    {
        id: 11,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nsw1aq4nrplrabe23cco',
        offer: '30% off for new customers',
        name: 'Pizza Paradise',
        rating: 4.6,
        categories: ['Pizza','Momos','Paratha'],
        location: 'Greenfield',
        timing: '20-30 mins'
    },
    {
        id: 12,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zgentufx2ybhgvqoot2y',
        offer: '5% cashback on orders',
        name: 'Kebab Corner',
        rating: 4.5,
        categories: ['Kebabs','Noodles','Momos','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Riverbank',
        timing: '30-35 mins'
    },
    {
        id: 13,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/d44b4cae-5218-49a6-8e55-76e44f3b0235_427905.JPG',
        offer: 'Free dessert on orders above ₹300',
        name: 'Italian Bistro',
        rating: 4.7,
        categories: ['Rolls','Pastry'],
        location: 'Café Street',
        timing: '25-30 mins'
    },
    {
        id: 14,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/31/7383126c-ee8b-47e6-9a09-e30119f070c1_836885.jpg',
        offer: 'Buy 2 Get 1 Free',
        name: 'Smoothie Spot',
        rating: 4.4,
        categories: ['Poori','Pastry'],
        location: 'Healthy Lane',
        timing: '10-15 mins'
    },
    {
        id: 15,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rfbnnyolx65p4sataq3t',
        offer: '50% off on weekends',
        name: 'Chinese Wok',
        rating: 4.1,
        categories: ['Pasta','Rolls','Burger','Poha','Chinese' ,'Noodles','Momos'],
        location: 'East Avenue',
        timing: '30-40 mins'
    },
    {
        id: 16,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/oi6ewbgo3xog5qshsaaa',
        offer: '25% off on all orders',
        name: 'Fish Fry House',
        rating: 4.3,
        categories: ['Pasta','Rolls','Burger','Poha','Chinese' ,'Noodles','Momos'],
        location: 'Seafood Lane',
        timing: '15-20 mins'
    },
    {
        id: 17,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/f9ec95a4-5c86-4163-abd3-ee22f599cf87_880942.JPG',
        offer: '15% off for students',
        name: 'Vegan Corner',
        rating: 4.8,
        categories: ['Veg','Rolls','Burger','Poha','Chinese' ,'Noodles','Momos'],
        location: 'Green Zone',
        timing: '20-25 mins'
    },
    {
        id: 18,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/39727799-6ea7-4806-b076-ad2b01b75d9e_446803.jpg',
        offer: '10% off on delivery',
        name: 'Pancake House',
        rating: 4.6,
        categories: [ 'Pizza'],
        location: 'Morning Street',
        timing: '8-12 mins'
    },
    {
        id: 19,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/82e46eb9feeba22bdc6e2641f77cab3b',
        offer: '60% off on selected combos',
        name: 'Spicy Kitchen',
        rating: 4.5,
        categories: ['Rolls','Burger','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Hot Street',
        timing: '25-35 mins'
    },
    {
        id: 20,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eo4p3gf56whavr5uneks',
        offer: '30% off on orders above ₹400',
        name: 'Deli Delights',
        rating: 4.2,
        categories: ['Poha','Cake','Poori','Pasta','Chinese' ,'Noodles','Momos'],
        location: 'Central Station',
        timing: '15-20 mins'
    },
    {
        id: 21,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pzjdirj3ylp6pdjkrgzo',
        offer: 'Free delivery on first order',
        name: 'Gyro City',
        rating: 4.4,
        categories: ['Chinese','Pasta','Noodles','Rolls','Burger','Cake','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'West End',
        timing: '20-30 mins'
    },
    {
        id: 22,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bmoyeeuuqqf5w8crwsd1',
        offer: '50% off on large ',
        name: 'Burger Joint',
        rating: 4.3,
        categories: ['Momos','Pasta','Noodles','Rolls','Burger','Cake','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'Near Park',
        timing: '25-30 mins'
    },
    {
        id: 23,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b14cd9fc40129fcfb97aa7e621719d07',
        offer: '25% off on all desserts',
        name: 'Ice Cream Paradise',
        rating: 4.6,
        categories: ['Ice Cream','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'Sweet Street',
        timing: '10-15 mins'
    },
    {
        id: 24,
        imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lljzjsyp9ckjjrpgteji',
        offer: '20% off for online orders',
        name: 'Wrap It Up',
        rating: 4.5,
        categories: ['Ice Cream','Gulab Jamun','Kebabs','Pastry','Poha','Poori'],
        location: 'Wrap Lane',
        timing: '15-20 mins'
    }
];

  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
  
  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.id === id);
  }
  
  getRestaurantsByCategory(category: string): Restaurant[] {
    return this.restaurants.filter(restaurant => restaurant.categories.includes(category));
  }

  filterByCategory(category: string): Restaurant[] {
    return this.restaurants.filter(restaurant =>
      restaurant.categories.some(cat => cat.toLowerCase().includes(category))
    );
  }
}
