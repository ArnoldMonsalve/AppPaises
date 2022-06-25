import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcapitalComponent } from './porcapital.component';

describe('PorcapitalComponent', () => {
  let component: PorcapitalComponent;
  let fixture: ComponentFixture<PorcapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcapitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
