import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopercepcionComponent } from './autopercepcion.component';

describe('AutopercepcionComponent', () => {
  let component: AutopercepcionComponent;
  let fixture: ComponentFixture<AutopercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutopercepcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutopercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
