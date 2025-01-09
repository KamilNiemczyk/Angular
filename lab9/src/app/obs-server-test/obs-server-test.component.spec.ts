import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsServerTestComponent } from './obs-server-test.component';

describe('ObsServerTestComponent', () => {
  let component: ObsServerTestComponent;
  let fixture: ComponentFixture<ObsServerTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsServerTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsServerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
