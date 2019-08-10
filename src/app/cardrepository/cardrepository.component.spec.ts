import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardrepositoryComponent } from './cardrepository.component';

describe('CardrepositoryComponent', () => {
  let component: CardrepositoryComponent;
  let fixture: ComponentFixture<CardrepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardrepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardrepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
