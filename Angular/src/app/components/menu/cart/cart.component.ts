import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Menu } from 'src/app/models/menu';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  custEmailId: string = "asupekar@seattleu.edu";

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.loadCartItems(this.custEmailId);
  }


  calcCartTotal() {
    console.log("Inside cart total");
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.itemPrice)
    })
  }


  loadCartItems(custEmailId : string) {
    console.log("Inside load cart items");
    this.cartService.retrieveCartDetails(custEmailId).subscribe((items: CartItem[]) => {
      this.cartItems = JSON.parse(JSON.stringify(items));
      console.log("Cartitems in cart components is " + JSON.stringify(this.cartItems) );
      this.calcCartTotal();
    })
  }

  retrieveCartDetails(custEmailId : string) {
    this.cartService.retrieveCartDetails(custEmailId) 
      .subscribe(cartItems => {​​​​
      console.log(JSON.parse(JSON.stringify(cartItems)));
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
    }​​​​);
  }


  //Delete entire cart
  onCartAllItemDelete() {
    this.cartService.deleteAllCart()
      .subscribe(() => {
        window.location.reload();
      });
  }
}