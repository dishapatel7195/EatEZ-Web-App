import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOrderDetailComponent } from './item-order-detail.component';

describe('ItemOrderDetailComponent', () => {
  let component: ItemOrderDetailComponent;
  let fixture: ComponentFixture<ItemOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOrderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
