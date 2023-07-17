import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZacComponent } from './zac.component';

describe('ZacComponent', () => {
  let component: ZacComponent;
  let fixture: ComponentFixture<ZacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZacComponent]
    });
    fixture = TestBed.createComponent(ZacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
