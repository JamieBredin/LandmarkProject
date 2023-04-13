import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkForumComponent } from './landmark-forum.component';

describe('LandmarkForumComponent', () => {
  let component: LandmarkForumComponent;
  let fixture: ComponentFixture<LandmarkForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandmarkForumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandmarkForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
