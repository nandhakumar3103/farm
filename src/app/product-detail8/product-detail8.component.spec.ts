import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail8Component } from './product-detail8.component';

describe('ProductDetail8Component', () => {
  let component: ProductDetail8Component;
  let fixture: ComponentFixture<ProductDetail8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
