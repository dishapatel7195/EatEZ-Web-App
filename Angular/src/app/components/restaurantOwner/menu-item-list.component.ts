import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService} from "../../services/menu.service";
import { Menu } from "../../models/menu";
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'mw-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {
  menu = '';
  menuItems: Menu[];
  restaurant: Restaurant;
  name:string;
  email:string;

  constructor(
    private menuItemService: MenuService,
    private restaurantService:RestaurantService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let restaurantId = paramMap.get('id');
        this.getMenuItems(restaurantId);
        this.getRestaurant(restaurantId);
      });
      this.activatedRoute.queryParams
      .subscribe(params => {
        this.name = params.name;
        this.email = params.email;
      });
  }

  onMenuItemDelete(menuItem: Menu) {
    this.menuItemService.delete(menuItem)
      .subscribe(() => {
        this.getMenuItems(menuItem.restaurantId.toString());
      });
  }

  getMenuItems(restaurantId : string) {
    //searchResult: MenuItem[];
    this.menuItemService.retrieveMenuDetails(restaurantId) //model._id;
      .subscribe(menuItems => {
        console.log(JSON.parse(JSON.stringify(menuItems)));
        //JSON.parse(JSON.stringify(menuItems))
        this.menuItems = JSON.parse(JSON.stringify(menuItems));
      });
  }

  getRestaurant(restaurantId : string) {
    this.restaurantService.retrieveRestaurant(restaurantId)
    .subscribe(restaurant => {
      
      this.restaurant = JSON.parse(JSON.stringify(restaurant));
      console.log(this.restaurant);
    })
  } 
}