import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetail4Component } from './product-detail4.component';

describe('ProductDetail4Component', () => {
  let component: ProductDetail4Component;
  let fixture: ComponentFixture<ProductDetail4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetail4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
