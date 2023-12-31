import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectriciteComponent } from './electricite.component';

describe('ElectriciteComponent', () => {
  let component: ElectriciteComponent;
  let fixture: ComponentFixture<ElectriciteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectriciteComponent]
    });
    fixture = TestBed.createComponent(ElectriciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
