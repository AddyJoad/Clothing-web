import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpageComponent } from './midpage.component';

describe('MidpageComponent', () => {
  let component: MidpageComponent;
  let fixture: ComponentFixture<MidpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidpageComponent]
    });
    fixture = TestBed.createComponent(MidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
