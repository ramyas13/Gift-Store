import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashiononeComponent } from './fashionone.component';

describe('FashiononeComponent', () => {
  let component: FashiononeComponent;
  let fixture: ComponentFixture<FashiononeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashiononeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashiononeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
