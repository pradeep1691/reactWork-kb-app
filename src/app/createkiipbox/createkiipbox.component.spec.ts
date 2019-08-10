import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatekiipboxComponent } from './createkiipbox.component';

describe('CreatekiipboxComponent', () => {
  let component: CreatekiipboxComponent;
  let fixture: ComponentFixture<CreatekiipboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatekiipboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatekiipboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
