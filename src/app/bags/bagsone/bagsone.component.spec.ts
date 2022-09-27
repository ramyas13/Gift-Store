import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsoneComponent } from './bagsone.component';

describe('BagsoneComponent', () => {
  let component: BagsoneComponent;
  let fixture: ComponentFixture<BagsoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagsoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
