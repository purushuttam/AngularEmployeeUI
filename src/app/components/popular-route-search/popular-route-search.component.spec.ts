import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRouteSearchComponent } from './popular-route-search.component';

describe('PopularRouteSearchComponent', () => {
  let component: PopularRouteSearchComponent;
  let fixture: ComponentFixture<PopularRouteSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularRouteSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularRouteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
