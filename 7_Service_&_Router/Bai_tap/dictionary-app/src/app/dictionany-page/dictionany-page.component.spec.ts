import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionanyPageComponent } from './dictionany-page.component';

describe('DictionanyPageComponent', () => {
  let component: DictionanyPageComponent;
  let fixture: ComponentFixture<DictionanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionanyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
