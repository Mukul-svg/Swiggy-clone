import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AccountComponent } from './pages/account/account.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
 
  { path: 'restaurant/:id', component: RestaurantDetailComponent },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'explore/:category',
    component: ExploreComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'account',
    component:AccountComponent,

  }
];
