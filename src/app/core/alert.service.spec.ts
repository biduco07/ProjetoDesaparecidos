import { TestBed } from '@angular/core/testing';

import { AlertService, NOTIFICADOR } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  let notificador: {
    success: ReturnType<typeof vi.fn>;
    error: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    notificador = { success: vi.fn(), error: vi.fn() };
    TestBed.configureTestingModule({
      providers: [{ provide: NOTIFICADOR, useValue: notificador }],
    });
    service = TestBed.inject(AlertService);
  });

  it('mostra o sucesso pelo toast.success, com o botão "Fechar"', () => {
    service.showSuccess('Enviado');

    expect(notificador.success).toHaveBeenCalledWith(
      'Enviado',
      expect.objectContaining({
        action: expect.objectContaining({ label: 'Fechar' }),
      })
    );
    expect(notificador.error).not.toHaveBeenCalled();
  });

  it('mostra o erro pelo toast.error, com o botão "Fechar"', () => {
    service.showError('Falhou');

    expect(notificador.error).toHaveBeenCalledWith(
      'Falhou',
      expect.objectContaining({
        action: expect.objectContaining({ label: 'Fechar' }),
      })
    );
    expect(notificador.success).not.toHaveBeenCalled();
  });
});
