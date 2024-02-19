import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderdDetailComponent } from './product-orderd-detail.component';

describe('ProductOrderdDetailComponent', () => {
  let component: ProductOrderdDetailComponent;
  let fixture: ComponentFixture<ProductOrderdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOrderdDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOrderdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
