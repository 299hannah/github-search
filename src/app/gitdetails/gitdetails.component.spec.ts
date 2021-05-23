import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitdetailsComponent } from './gitdetails.component';

describe('GitdetailsComponent', () => {
  let component: GitdetailsComponent;
  let fixture: ComponentFixture<GitdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
