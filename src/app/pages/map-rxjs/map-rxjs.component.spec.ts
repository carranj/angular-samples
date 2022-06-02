import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRxjsComponent } from './map-rxjs.component';

describe('MapRxjsComponent', () => {
  let component: MapRxjsComponent;
  let fixture: ComponentFixture<MapRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
