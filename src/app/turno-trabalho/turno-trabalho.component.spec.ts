import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoTrabalhoComponent } from './turno-trabalho.component';

describe('TurnoTrabalhoComponent', () => {
  let component: TurnoTrabalhoComponent;
  let fixture: ComponentFixture<TurnoTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
