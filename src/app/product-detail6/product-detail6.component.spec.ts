import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail6Component } from './product-detail6.component';

describe('ProductDetail6Component', () => {
  let component: ProductDetail6Component;
  let fixture: ComponentFixture<ProductDetail6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
