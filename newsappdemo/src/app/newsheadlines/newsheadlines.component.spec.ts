import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsheadlinesComponent } from './newsheadlines.component';

describe('NewsheadlinesComponent', () => {
  let component: NewsheadlinesComponent;
  let fixture: ComponentFixture<NewsheadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsheadlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsheadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
