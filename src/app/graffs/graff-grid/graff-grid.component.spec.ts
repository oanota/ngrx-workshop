import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffGridComponent } from './graff-grid.component';

describe('GraffGridComponent', () => {
  let component: GraffGridComponent;
  let fixture: ComponentFixture<GraffGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraffGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraffGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
