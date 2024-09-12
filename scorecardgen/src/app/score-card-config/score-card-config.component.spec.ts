import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardConfigComponent } from './score-card-config.component';

describe('ScoreCardConfigComponent', () => {
  let component: ScoreCardConfigComponent;
  let fixture: ComponentFixture<ScoreCardConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreCardConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreCardConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
