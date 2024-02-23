import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dyComponent } from './dy.component';

describe('DyComponent', () => {
  let component: dyComponent;
  let fixture: ComponentFixture<dyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(dyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
