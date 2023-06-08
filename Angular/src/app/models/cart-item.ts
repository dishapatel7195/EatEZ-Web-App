import { Menu } from './menu';


export class CartItem {
  _id: Number;
  menuId: Number;
  itemName: String;
  restaurantId: Number;
  qty: number;
  itemPrice: Number;
  custEmailId: String;
  itemImageUrl: String;

  constructor(menu: Menu, qty = 1, custEmailId: String) {
    //this._id = id;
    this.menuId = menu._id;
    this.itemName = menu.itemName;
    this.itemPrice = menu.itemPrice;
    this.qty = qty;
    this.restaurantId = menu.restaurantId;
    this.custEmailId = custEmailId;
    this.itemImageUrl = menu.menuItemImageUrl;
  }
}
