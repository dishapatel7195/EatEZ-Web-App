import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-menu-item',
  templateUrl: './ownerMenu-item.component.html',
  styleUrls: ['./ownerMenu-item.component.css']
})
export class OwnerMenuItemComponent {
  @Input() menuItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.menuItem);
  }
}
