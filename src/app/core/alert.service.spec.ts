import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  let snackBar: { open: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    snackBar = { open: vi.fn() };
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useValue: snackBar }],
    });
    service = TestBed.inject(AlertService);
  });

  it('mostra a mensagem de sucesso com o estilo de sucesso', () => {
    service.showSuccess('Enviado');

    expect(snackBar.open).toHaveBeenCalledWith(
      'Enviado',
      'Fechar',
      expect.objectContaining({ panelClass: ['success-snackbar'] })
    );
  });

  it('mostra a mensagem de erro com o estilo de erro', () => {
    service.showError('Falhou');

    expect(snackBar.open).toHaveBeenCalledWith(
      'Falhou',
      'Fechar',
      expect.objectContaining({ panelClass: ['error-snackbar'] })
    );
  });
});
