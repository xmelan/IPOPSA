import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerPreviewComponent } from './trailer-preview.component';

describe('TrailerPreviewComponent', () => {
  let component: TrailerPreviewComponent;
  let fixture: ComponentFixture<TrailerPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailerPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
