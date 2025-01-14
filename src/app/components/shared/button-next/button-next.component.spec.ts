import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNextComponent } from './button-next.component';

describe('ButtonNextComponent', () => {
  let component: ButtonNextComponent;
  let fixture: ComponentFixture<ButtonNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
