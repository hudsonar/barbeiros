import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoExecutadoComponent } from './servico-executado.component';

describe('ServicoExecutadoComponent', () => {
  let component: ServicoExecutadoComponent;
  let fixture: ComponentFixture<ServicoExecutadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoExecutadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoExecutadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
