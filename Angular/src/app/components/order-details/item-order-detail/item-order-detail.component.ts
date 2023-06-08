import { Component, OnInit, Input } from '@angular/core';
import { ItemOrder } from 'src/app/models/item-order'

@Component({
  selector: 'app-item-order-detail',
  templateUrl: './item-order-detail.component.html',
  styleUrls: ['./item-order-detail.component.css']
})
export class ItemOrderDetailComponent implements OnInit {

  @Input() OrderItem: ItemOrder
  constructor() { }

  ngOnInit(): void {
  }

}
