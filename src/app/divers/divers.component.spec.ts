import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversComponent } from './divers.component';

describe('DiversComponent', () => {
  let component: DiversComponent;
  let fixture: ComponentFixture<DiversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiversComponent]
    });
    fixture = TestBed.createComponent(DiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
