import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CokctailListComponent } from './cokctail-list.component';

describe('CokctailListComponent', () => {
  let component: CokctailListComponent;
  let fixture: ComponentFixture<CokctailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CokctailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CokctailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
