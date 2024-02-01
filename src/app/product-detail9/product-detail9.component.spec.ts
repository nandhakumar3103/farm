import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail9Component } from './product-detail9.component';

describe('ProductDetail9Component', () => {
  let component: ProductDetail9Component;
  let fixture: ComponentFixture<ProductDetail9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
