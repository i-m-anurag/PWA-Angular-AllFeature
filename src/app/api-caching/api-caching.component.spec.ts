import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCachingComponent } from './api-caching.component';

describe('ApiCachingComponent', () => {
  let component: ApiCachingComponent;
  let fixture: ComponentFixture<ApiCachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
