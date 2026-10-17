import type { Mocked } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNgxMask } from 'ngx-mask';

import { DesaparecidosDetalheDialogComponent } from './desaparecidos-detalhe-dialog.component';
import { DesaparecidosFacade } from '../../../desaparecidos.facade';
import { AlertService } from '../../../../../core/alert.service';

function criarArquivo(nome: string): File {
  return new File(['conteudo'], nome, { type: 'image/png' });
}

/** Simula o evento `change` do <input type="file"> com os arquivos escolhidos. */
function eventoDeSelecao(arquivos: File[]): Event {
  return { target: { files: arquivos } } as unknown as Event;
}

describe('DesaparecidosDetalheDialogComponent', () => {
  let component: DesaparecidosDetalheDialogComponent;
  let fixture: ComponentFixture<DesaparecidosDetalheDialogComponent>;
  let facade: Mocked<Pick<DesaparecidosFacade, 'postOcorrencia'>>;

  beforeEach(async () => {
    facade = { postOcorrencia: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [DesaparecidosDetalheDialogComponent],
      providers: [
        provideNgxMask(),
        { provide: DesaparecidosFacade, useValue: facade },
        { provide: AlertService, useValue: { showError: vi.fn() } },
        { provide: MatDialogRef, useValue: { close: vi.fn() } },
        { provide: MAT_DIALOG_DATA, useValue: { id: 99, descricao: 'FULANO' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DesaparecidosDetalheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function preencherFormulario(): void {
    component.form.patchValue({
      informacao: 'Visto no centro',
      data: '10012024',
    });
  }

  function arquivosEnviados(): File[] {
    expect(facade.postOcorrencia).toHaveBeenCalled();
    const [formData] = facade.postOcorrencia.mock.lastCall ?? [];
    return (formData?.getAll('files') ?? []) as File[];
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('envia todos os arquivos selecionados', () => {
    const foto1 = criarArquivo('foto1.png');
    const foto2 = criarArquivo('foto2.png');
    component.onFilesSelected(eventoDeSelecao([foto1, foto2]));
    preencherFormulario();

    component.onSend();

    expect(arquivosEnviados().map((f) => f.name)).toEqual([
      'foto1.png',
      'foto2.png',
    ]);
  });

  it('não envia o arquivo cuja imagem foi removida', () => {
    const foto1 = criarArquivo('foto1.png');
    const foto2 = criarArquivo('foto2.png');
    const foto3 = criarArquivo('foto3.png');
    component.onFilesSelected(eventoDeSelecao([foto1, foto2, foto3]));

    component.removeImage(1);
    preencherFormulario();
    component.onSend();

    expect(arquivosEnviados().map((f) => f.name)).toEqual([
      'foto1.png',
      'foto3.png',
    ]);
  });

  it('remove a pré-visualização e o arquivo da mesma posição', () => {
    const foto1 = criarArquivo('foto1.png');
    const foto2 = criarArquivo('foto2.png');
    component.onFilesSelected(eventoDeSelecao([foto1, foto2]));

    component.removeImage(0);

    expect(component.imagens().length).toBe(1);
    expect(component.imagens()[0].arquivo).toBe(foto2);
  });

  it('mostra a pré-visualização quando a leitura do arquivo termina', async () => {
    component.onFilesSelected(eventoDeSelecao([criarArquivo('foto1.png')]));

    // O FileReader é assíncrono; o signal atualiza a view (OnPush) no fim.
    await vi.waitFor(() => {
      fixture.detectChanges();
      const img = (fixture.nativeElement as HTMLElement).querySelector('img');
      expect(img?.getAttribute('src')).toMatch(/^data:image\/png;base64,/);
    });
  });
});
