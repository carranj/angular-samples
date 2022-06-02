import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfRxjsComponent } from './of-rxjs.component';

describe('OfRxjsComponent', () => {
  let component: OfRxjsComponent;
  let fixture: ComponentFixture<OfRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
