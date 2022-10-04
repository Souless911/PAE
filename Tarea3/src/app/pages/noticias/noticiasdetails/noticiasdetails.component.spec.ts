import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasdetailsComponent } from './noticiasdetails.component';

describe('NoticiasdetailsComponent', () => {
  let component: NoticiasdetailsComponent;
  let fixture: ComponentFixture<NoticiasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
