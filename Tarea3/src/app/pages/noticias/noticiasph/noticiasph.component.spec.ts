import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasphComponent } from './noticiasph.component';

describe('NoticiasphComponent', () => {
  let component: NoticiasphComponent;
  let fixture: ComponentFixture<NoticiasphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
