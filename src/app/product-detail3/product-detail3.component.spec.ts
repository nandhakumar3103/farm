import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail3Component } from './product-detail3.component';

describe('ProductDetail3Component', () => {
  let component: ProductDetail3Component;
  let fixture: ComponentFixture<ProductDetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
