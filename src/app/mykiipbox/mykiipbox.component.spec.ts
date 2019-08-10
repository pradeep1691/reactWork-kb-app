import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MykiipboxComponent } from './mykiipbox.component';

describe('MykiipboxComponent', () => {
  let component: MykiipboxComponent;
  let fixture: ComponentFixture<MykiipboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MykiipboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MykiipboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
