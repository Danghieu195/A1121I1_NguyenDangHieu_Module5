import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtServiceComponent } from './eidt-service.component';

describe('EidtServiceComponent', () => {
  let component: EidtServiceComponent;
  let fixture: ComponentFixture<EidtServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
