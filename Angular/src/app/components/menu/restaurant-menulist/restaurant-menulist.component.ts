import { Component, OnInit } from '@angular/core';
import { MenuService} from "../../../services/menu.service";
import { RestaurantService} from "../../../services/restaurant.service";
import { Menu } from "../../../models/menu";
import { Restaurant} from "src/app/models/restaurant";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-restaurant-menulist',
  templateUrl: './restaurant-menulist.component.html',
  styleUrls: ['./restaurant-menulist.component.css']
})
export class RestaurantMenulistComponent implements OnInit {
  menulist: Menu[];
  restaurant: Restaurant;

  constructor(
    private MenuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private RestaurantService: RestaurantService) {}

  
  ngOnInit() {​​​​
         this.activatedRoute.paramMap.subscribe(paramMap => {​​​​
              let menuId = paramMap.get('id');
                  console.log(menuId);
                  this.retrieveMenuDetails(menuId);
        }​​​​);
}​​​​
 
retrieveMenuDetails(id : string) {​​​​
      this.MenuService.retrieveMenuDetailForUser(id) //model._id; Menu.restaurantId
      .subscribe(menulist => {​​​​
      console.log(JSON.parse(JSON.stringify(menulist)));
      this.menulist = JSON.parse(JSON.stringify(menulist));
      }​​​​);
    }​​​
}

