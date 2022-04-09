import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerAdminComponent } from './trailer-admin.component';

describe('TrailerAdminComponent', () => {
  let component: TrailerAdminComponent;
  let fixture: ComponentFixture<TrailerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
