import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamaicaMarketComponent } from './jamaica-market.component';

describe('JamaicaMarketComponent', () => {
  let component: JamaicaMarketComponent;
  let fixture: ComponentFixture<JamaicaMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamaicaMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamaicaMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
