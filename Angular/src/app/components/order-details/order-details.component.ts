import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  cartItems: CartItem[];
  singleItem : Number;
  custEmailId : string = "asupekar@seattleu.edu";

  constructor( 
    private CartService : CartService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.retrieveCartDetails(this.custEmailId);  
  }

  retrieveCartDetails(custEmailId : string) {
    this.CartService.retrieveCartDetails(custEmailId) 
      .subscribe(cartItems => {​​​​
      console.log(JSON.parse(JSON.stringify(cartItems)));
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
      this.singleItem = this.cartItems[0].restaurantId;
    }​​​​);
  }

}
