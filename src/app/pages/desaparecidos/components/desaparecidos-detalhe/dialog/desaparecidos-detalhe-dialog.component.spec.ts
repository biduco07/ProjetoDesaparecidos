import type { Mocked } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNgxMask } from 'ngx-mask';

import { FormControl } from '@angular/forms';
import {
  DesaparecidosDetalheDialogComponent,
  TAMANHO_MAXIMO_IMAGEM,
  dataValidaValidator,
} from './desaparecidos-detalhe-dialog.component';
import { DesaparecidosFacade } from '../../../desaparecidos.facade';
import { AlertService } from '../../../../../core/alert.service';

function criarArquivo(nome: string, type = 'image/png'): File {
  return new File(['conteudo'], nome, { type });
}

/** Simula o evento `change` do <input type="file"> com os arquivos escolhidos. */
function eventoDeSelecao(arquivos: File[]): Event {
  return { target: { files: arquivos } } as unknown as Event;
}

describe('DesaparecidosDetalheDialogComponent', () => {
  let component: DesaparecidosDetalheDialogComponent;
  let fixture: ComponentFixture<DesaparecidosDetalheDialogComponent>;
  let facade: Mocked<Pick<DesaparecidosFacade, 'postOcorrencia'>>;
  let alert: { showError: ReturnType<typeof vi.fn> };
  let dialogRef: { close: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    facade = { postOcorrencia: vi.fn() };
    alert = { showError: vi.fn() };
    dialogRef = { close: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [DesaparecidosDetalheDialogComponent],
      providers: [
        provideNgxMask(),
        { provide: DesaparecidosFacade, useValue: facade },
        { provide: AlertService, useValue: alert },
        { provide: MatDialogRef, useValue: dialogRef },
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

  it('envia os campos convertidos para a API e fecha o diálogo', () => {
    component.form.patchValue({
      informacao: '  Visto no centro  ',
      data: '10012024',
    });

    component.onSend();

    const [formData] = facade.postOcorrencia.mock.lastCall ?? [];
    expect(formData?.get('ocoId')).toBe('99');
    expect(formData?.get('descricao')).toBe('FULANO');
    expect(formData?.get('informacao')).toBe('Visto no centro');
    expect(formData?.get('data')).toBe('2024-01-10');
    expect(dialogRef.close).toHaveBeenCalled();
  });

  it('não envia o formulário inválido, mostra os erros e foca o primeiro campo', () => {
    component.onSend();
    fixture.detectChanges();

    const elemento = fixture.nativeElement as HTMLElement;
    expect(facade.postOcorrencia).not.toHaveBeenCalled();
    expect(dialogRef.close).not.toHaveBeenCalled();
    const erros = Array.from(elemento.querySelectorAll('mat-error')).map((e) =>
      e.textContent?.trim()
    );
    expect(erros).toEqual([
      'Descreva o que você sabe sobre a pessoa.',
      'Informe a data.',
    ]);
    expect(document.activeElement).toBe(elemento.querySelector('textarea'));
  });

  it('não aceita informação só com espaços', () => {
    component.form.patchValue({ informacao: '   ', data: '10012024' });

    component.onSend();

    expect(facade.postOcorrencia).not.toHaveBeenCalled();
  });

  it('recusa arquivos que não são PNG/JPG ou passam de 3 MB', () => {
    const grande = new File([new Uint8Array(TAMANHO_MAXIMO_IMAGEM + 1)], 'grande.png', {
      type: 'image/png',
    });
    const pdf = criarArquivo('documento.pdf', 'application/pdf');
    const foto = criarArquivo('foto.jpg', 'image/jpeg');

    component.onFilesSelected(eventoDeSelecao([grande, pdf, foto]));

    expect(component.imagens().map((i) => i.arquivo.name)).toEqual(['foto.jpg']);
    expect(alert.showError).toHaveBeenCalledWith(
      expect.stringContaining('grande.png, documento.pdf')
    );
  });

  it('dá nome acessível ao botão de remover cada imagem', async () => {
    component.onFilesSelected(eventoDeSelecao([criarArquivo('foto1.png')]));
    fixture.detectChanges();

    const botao = (fixture.nativeElement as HTMLElement).querySelector(
      '.delete-btn'
    );
    expect(botao?.getAttribute('aria-label')).toBe(
      'Remover imagem 1: foto1.png'
    );
    expect(botao?.getAttribute('type')).toBe('button');
  });

  it('rotula a data como o dia em que a pessoa foi vista', () => {
    const rotulos = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('mat-label'),
      (e) => e.textContent?.trim()
    );
    expect(rotulos).toContain('Data em que a pessoa foi vista');
  });

  it('fecha sem enviar pelo botão "Fechar"', () => {
    component.onClose();

    expect(dialogRef.close).toHaveBeenCalled();
    expect(facade.postOcorrencia).not.toHaveBeenCalled();
  });
});

describe('dataValidaValidator', () => {
  const validar = (valor: string) =>
    dataValidaValidator(new FormControl(valor, { nonNullable: true }));

  it('aceita uma data passada válida', () => {
    expect(validar('10012024')).toBeNull();
  });

  it('deixa o campo vazio para o Validators.required', () => {
    expect(validar('')).toBeNull();
  });

  it.each(['31022024', '00012024', '10132024', '1001202', '10011899'])(
    'recusa %s',
    (valor) => {
      expect(validar(valor)).toEqual({ dataInvalida: true });
    }
  );

  it('aceita 29/02 em ano bissexto', () => {
    expect(validar('29022024')).toBeNull();
  });

  it('recusa datas no futuro', () => {
    const amanha = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const valor =
      String(amanha.getDate()).padStart(2, '0') +
      String(amanha.getMonth() + 1).padStart(2, '0') +
      amanha.getFullYear();
    expect(validar(valor)).toEqual({ dataFutura: true });
  });
});
