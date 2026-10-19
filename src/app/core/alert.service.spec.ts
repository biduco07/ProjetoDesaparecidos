import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { AlertService, NOTIFICADOR } from './alert.service';

describe('AlertService', () => {
  let notificador: {
    success: ReturnType<typeof vi.fn>;
    error: ReturnType<typeof vi.fn>;
  };
  let anunciador: { announce: ReturnType<typeof vi.fn> };

  function criar(plataforma = 'browser'): AlertService {
    notificador = { success: vi.fn(), error: vi.fn() };
    anunciador = { announce: vi.fn().mockResolvedValue(undefined) };
    TestBed.configureTestingModule({
      providers: [
        { provide: NOTIFICADOR, useValue: notificador },
        { provide: LiveAnnouncer, useValue: anunciador },
        { provide: PLATFORM_ID, useValue: plataforma },
      ],
    });
    return TestBed.inject(AlertService);
  }

  it('mostra o sucesso pelo toast.success, com o botão "Fechar"', () => {
    criar().showSuccess('Enviado');

    expect(notificador.success).toHaveBeenCalledWith(
      'Enviado',
      expect.objectContaining({
        action: expect.objectContaining({ label: 'Fechar' }),
      })
    );
    expect(notificador.error).not.toHaveBeenCalled();
  });

  it('mostra o erro pelo toast.error, com o botão "Fechar"', () => {
    criar().showError('Falhou');

    expect(notificador.error).toHaveBeenCalledWith(
      'Falhou',
      expect.objectContaining({
        action: expect.objectContaining({ label: 'Fechar' }),
      })
    );
    expect(notificador.success).not.toHaveBeenCalled();
  });

  // A região do sonner nasce já com o texto (no primeiro aviso, e dentro do
  // @defer), e vários leitores de tela não anunciam região que nasce com
  // conteúdo. O LiveAnnouncer usa uma região aria-live que já existe.
  it('anuncia o sucesso ao leitor de tela de forma educada (polite)', () => {
    criar().showSuccess('Enviado');

    expect(anunciador.announce).toHaveBeenCalledWith('Enviado', 'polite');
  });

  it('anuncia o erro ao leitor de tela na hora (assertive)', () => {
    criar().showError('Falhou');

    expect(anunciador.announce).toHaveBeenCalledWith('Falhou', 'assertive');
  });

  it('no servidor não anuncia nada', () => {
    const alerta = criar('server');

    alerta.showSuccess('Enviado');
    alerta.showError('Falhou');

    expect(anunciador.announce).not.toHaveBeenCalled();
  });
});
