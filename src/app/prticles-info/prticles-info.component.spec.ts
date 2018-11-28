import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrticlesInfoComponent } from './prticles-info.component';

describe('PrticlesInfoComponent', () => {
  let component: PrticlesInfoComponent;
  let fixture: ComponentFixture<PrticlesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrticlesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrticlesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
