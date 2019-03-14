import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthyearComponent } from './birthyear.component';

describe('BirthyearComponent', () => {
  let component: BirthyearComponent;
  let fixture: ComponentFixture<BirthyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
