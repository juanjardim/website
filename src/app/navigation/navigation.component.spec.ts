import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagigationComponent } from './nagigation.component';

describe('NagigationComponent', () => {
  let component: NagigationComponent;
  let fixture: ComponentFixture<NagigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
