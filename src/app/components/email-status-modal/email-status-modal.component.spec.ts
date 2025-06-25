import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailStatusModalComponent } from './email-status-modal.component';

describe('EmailStatusModalComponent', () => {
  let component: EmailStatusModalComponent;
  let fixture: ComponentFixture<EmailStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailStatusModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
