import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from "src/app/services/restaurant.service";
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  restaurant: Restaurant;
  restId: number;
  emailId: string = "asupekar@seattleu.edu";

  constructor(private RestaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute, 
    private cartservice : CartService,
    ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {​​​​
      let restId = Number(paramMap.get('restId'));
      console.log("Printing restId " + JSON.stringify(restId));
      this.retrieveRestaurantDetails(restId);
      this.onCartAllItemDelete();
    });
 }

 retrieveRestaurantDetails(restId : number) {​​​​
  this.RestaurantService.retrieveRestaurantDetails(restId).subscribe((restaurantInfo) =>{
  this.restaurant = JSON.parse(JSON.stringify(restaurantInfo))
});
}

  //Delete entire cart
  onCartAllItemDelete() {
    this.cartservice.deleteAllCart()
      .subscribe(() => {
      });
  }
}


