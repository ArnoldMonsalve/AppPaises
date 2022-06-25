import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorpaisComponent } from './porpais.component';

describe('PorpaisComponent', () => {
  let component: PorpaisComponent;
  let fixture: ComponentFixture<PorpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorpaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
