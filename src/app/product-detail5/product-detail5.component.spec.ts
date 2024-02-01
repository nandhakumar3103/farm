import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail5Component } from './product-detail5.component';

describe('ProductDetail5Component', () => {
  let component: ProductDetail5Component;
  let fixture: ComponentFixture<ProductDetail5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
