import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniverComponent } from './anniver.component';

describe('AnniverComponent', () => {
  let component: AnniverComponent;
  let fixture: ComponentFixture<AnniverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnniverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
