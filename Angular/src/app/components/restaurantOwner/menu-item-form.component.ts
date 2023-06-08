import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuService} from "../../services/menu.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mw-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.css']
})
export class MenuItemFormComponent implements OnInit {
  form: FormGroup;
  restaurantId : string;

  constructor(
    private formBuilder: FormBuilder,
    private menuItemService: MenuService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap => {
      this.restaurantId = paramMap.get('id');
    });
    this.form = this.formBuilder.group({
      itemName: this.formBuilder.control(''),
      itemDescription: this.formBuilder.control(''),
      itemPrice: this.formBuilder.control(''),
      menuItemImageUrl: this.formBuilder.control(''),
    });
  }

  onSubmit(menuItem) {
    menuItem.restaurantId = this.restaurantId;
    this.menuItemService.add(menuItem)
      .subscribe(() => {
        this.router.navigate(['/', 'restaurantOwner', this.restaurantId]);
      });
  }
}
