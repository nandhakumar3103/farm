import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail7Component } from './product-detail7.component';

describe('ProductDetail7Component', () => {
  let component: ProductDetail7Component;
  let fixture: ComponentFixture<ProductDetail7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
