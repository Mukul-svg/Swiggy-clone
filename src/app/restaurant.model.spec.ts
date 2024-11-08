
import { Restaurant } from './restaurant.model';

describe('Restaurant Model', () => {
  it('should create a valid restaurant object', () => {
    const restaurant: Restaurant = {
      id: 1,
      name: 'Pizza Palace',
      imageUrl: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a0726fc0-7380-4a6e-ba39-ad82f92e92d2_217542.jpg',
      offer: '50% off up to ₹100',
      rating: 4.3,
      categories: ['Pizzas'],
      location: 'Sector 22',
      timing: '30-35 mins'
    };

    expect(restaurant).toBeTruthy();
    expect(restaurant.id).toBe(1);
    expect(restaurant.name).toBe('Pizza Palace');
    expect(restaurant.imageUrl).toBe('https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a0726fc0-7380-4a6e-ba39-ad82f92e92d2_217542.jpg');
    expect(restaurant.offer).toBe('50% off up to ₹100');
    expect(restaurant.rating).toBe(4.3);
    expect(restaurant.categories).toBe('Pizzas');
    expect(restaurant.location).toBe('Sector 22');
    expect(restaurant.timing).toBe('30-35 mins');
  });
});
