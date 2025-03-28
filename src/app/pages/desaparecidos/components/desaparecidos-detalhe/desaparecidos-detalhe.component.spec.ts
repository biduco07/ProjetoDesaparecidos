import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaparecidosDetalheComponent } from './desaparecidos-detalhe.component';

describe('DesaparecidosDetalheComponent', () => {
  let component: DesaparecidosDetalheComponent;
  let fixture: ComponentFixture<DesaparecidosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaparecidosDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaparecidosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
