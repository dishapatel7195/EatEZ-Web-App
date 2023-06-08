import { Component, OnInit, Input} from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant'
@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input() restaurantItem: Restaurant
  constructor() { }

  ngOnInit(): void {
  }
}
