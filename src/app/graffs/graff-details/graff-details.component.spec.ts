import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffDetailsComponent } from './graff-details.component';

describe('GraffDetailsComponent', () => {
  let component: GraffDetailsComponent;
  let fixture: ComponentFixture<GraffDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraffDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
