import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactesDetailsComponent } from './charactes-details.component';

describe('CharactesDetailsComponent', () => {
  let component: CharactesDetailsComponent;
  let fixture: ComponentFixture<CharactesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
