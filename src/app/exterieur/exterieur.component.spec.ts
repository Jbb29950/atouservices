import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExterieurComponent } from './exterieur.component';

describe('ExterieurComponent', () => {
  let component: ExterieurComponent;
  let fixture: ComponentFixture<ExterieurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExterieurComponent]
    });
    fixture = TestBed.createComponent(ExterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
