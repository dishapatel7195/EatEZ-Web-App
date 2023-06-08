import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { MenuComponent} from "./components/menu/menu.component";
import { RestaurantMenulistComponent } from './components/menu/restaurant-menulist/restaurant-menulist.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/menu/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component'
import { MenuItemListComponent } from './components/restaurantOwner/menu-item-list.component';
import { MenuItemFormComponent } from './components/restaurantOwner/menu-item-form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OwnerLoginPageComponent } from './components/restaurantOwner/owner-login-page.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'menulist', component: RestaurantMenulistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'restaurantOwner/:id', component: MenuItemListComponent },
  { path: 'addMenuItem/:id', component: MenuItemFormComponent},
  { path: 'addToCart/', component: MenuItemFormComponent},
  { path: 'confirmation/:restId', component: ConfirmationComponent},
  { path: 'restaurantOwnerLogin', component: OwnerLoginPageComponent},
  { path: '**', component: PageNotFoundComponent },
  

];
@NgModule({imports: [
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
