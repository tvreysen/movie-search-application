import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieService } from './movie-service';

describe('MovieService', () => {
  let component: MovieService;
  let fixture: ComponentFixture<MovieService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
