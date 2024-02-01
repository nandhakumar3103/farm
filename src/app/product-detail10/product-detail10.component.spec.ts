import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail10Component } from './product-detail10.component';

describe('ProductDetail10Component', () => {
  let component: ProductDetail10Component;
  let fixture: ComponentFixture<ProductDetail10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
