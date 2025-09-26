import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInformation } from './movie-information';

describe('MovieInformation', () => {
  let component: MovieInformation;
  let fixture: ComponentFixture<MovieInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
