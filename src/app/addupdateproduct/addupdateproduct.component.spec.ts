import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateproductComponent } from './addupdateproduct.component';

describe('AddupdateproductComponent', () => {
  let component: AddupdateproductComponent;
  let fixture: ComponentFixture<AddupdateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdateproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
