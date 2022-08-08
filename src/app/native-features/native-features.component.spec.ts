import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeFeaturesComponent } from './native-features.component';

describe('NativeFeaturesComponent', () => {
  let component: NativeFeaturesComponent;
  let fixture: ComponentFixture<NativeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
