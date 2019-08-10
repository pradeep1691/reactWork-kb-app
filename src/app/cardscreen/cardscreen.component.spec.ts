import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardscreenComponent } from './cardscreen.component';

describe('CardscreenComponent', () => {
  let component: CardscreenComponent;
  let fixture: ComponentFixture<CardscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
