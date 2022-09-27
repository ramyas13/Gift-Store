import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnioneComponent } from './annione.component';

describe('AnnioneComponent', () => {
  let component: AnnioneComponent;
  let fixture: ComponentFixture<AnnioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
