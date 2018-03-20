import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CokctailDetailComponent } from './cokctail-detail.component';

describe('CokctailDetailComponent', () => {
  let component: CokctailDetailComponent;
  let fixture: ComponentFixture<CokctailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CokctailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CokctailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
