import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpaisComponent } from './verpais.component';

describe('VerpaisComponent', () => {
  let component: VerpaisComponent;
  let fixture: ComponentFixture<VerpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
