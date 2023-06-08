import { Injectable } from '@angular/core';
import { Restaurant } from "src/app/models/restaurant";

import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceCopy {

  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/restaurantList.json';

  constructor(private http: HttpClient) {
  }

  // getLists(){
  //   return this.http.get<RestaurantClass[]>(this.hostUrl + 'data/restaurantList.json');
  // }
  // restaurants: Restaurant[] = [
  //   new Restaurant(1, 'Redhawk Dinning', 'Seattle','https://pbs.twimg.com/profile_images/990973421835071489/ZYY6dIm9_400x400.jpg'),
  //   new Restaurant(2, 'Cactus', 'Seattle','https://ehc-west-0-bucket.s3.us-west-2.amazonaws.com/web/documents/cactuscoffeeshop/promo_5c8fbfc008184.png'),
  //   new Restaurant(3, 'Chipotle', 'Seattle','https://pbs.twimg.com/profile_images/970669059917471744/_KaAvCGb_400x400.jpg'),
  //   new Restaurant(4, 'Food Truck', 'Seattle','https://i.pinimg.com/originals/55/dc/c0/55dcc028a9f7d9e7250c7cc7520c5214.jpg'),
  //   new Restaurant(5, 'Mcdonalds', 'Seattle','https://yt3.ggpht.com/a-/AAuE7mAME_lpFRR2T0W4e8RF6NHA1o59FKzSDCBqjw=s240-mo-c-c0xffffffff-rj-k-no'),
  //   new Restaurant(6, 'dominos', 'Seattle','https://ik.imagekit.io/smdxc0e2g3/generic-endpoint/https://pbs.twimg.com/profile_images/1968502170/domisoss_400x400.jpg?tr=w-240,rt-0'),
  //   new Restaurant(7, 'Burgur King', 'Seattle','https://image.pngaaa.com/920/1924920-small.png'),
  //   new Restaurant(8, 'Molly Moons', 'Seattle','https://pbs.twimg.com/profile_images/378800000145589863/6d5b0be5bf3701679981a606cf19fd24.jpeg'),
  // ]

  

    getRestaurants(): Observable <Restaurant[]> {
      //TODO: Populate products from an API and return an Observable
      return this.http.get<Restaurant[]>(this.url);
    }


}
