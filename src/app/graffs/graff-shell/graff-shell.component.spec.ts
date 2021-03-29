import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraffShellComponent } from './graff-shell.component';

describe('GraffShellComponent', () => {
  let component: GraffShellComponent;
  let fixture: ComponentFixture<GraffShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraffShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraffShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
