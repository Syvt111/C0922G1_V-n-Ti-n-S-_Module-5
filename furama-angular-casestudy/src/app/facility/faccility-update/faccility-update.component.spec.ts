import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccilityUpdateComponent } from './faccility-update.component';

describe('FaccilityUpdateComponent', () => {
  let component: FaccilityUpdateComponent;
  let fixture: ComponentFixture<FaccilityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaccilityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaccilityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
