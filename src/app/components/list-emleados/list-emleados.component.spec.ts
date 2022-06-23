import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmleadosComponent } from './list-emleados.component';

describe('ListEmleadosComponent', () => {
  let component: ListEmleadosComponent;
  let fixture: ComponentFixture<ListEmleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
