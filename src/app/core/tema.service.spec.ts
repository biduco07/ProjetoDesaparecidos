import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TemaService } from './tema.service';

describe('TemaService', () => {
  const html = document.documentElement;

  beforeEach(() => {
    localStorage.clear();
    html.classList.add('dark');
    html.style.colorScheme = '';
  });

  afterEach(() => localStorage.clear());

  function criar(plataforma = 'browser'): TemaService {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: plataforma }],
    });
    return TestBed.inject(TemaService);
  }

  it('começa no escuro quando não há escolha salva', () => {
    expect(criar().modo()).toBe('escuro');
  });

  it('respeita a escolha "claro" salva', () => {
    localStorage.setItem('nuvy-tema', 'claro');

    expect(criar().modo()).toBe('claro');
  });

  it('alternar() vai para o claro, tira .dark do <html> e grava a escolha', () => {
    const tema = criar();

    tema.alternar();

    expect(tema.modo()).toBe('claro');
    expect(html.classList.contains('dark')).toBe(false);
    expect(html.style.colorScheme).toBe('light');
    expect(localStorage.getItem('nuvy-tema')).toBe('claro');
  });

  it('definir("escuro") põe .dark no <html> e grava a escolha', () => {
    html.classList.remove('dark');
    const tema = criar();

    tema.definir('escuro');

    expect(html.classList.contains('dark')).toBe(true);
    expect(html.style.colorScheme).toBe('dark');
    expect(localStorage.getItem('nuvy-tema')).toBe('escuro');
  });

  it('no servidor não mexe no DOM nem no localStorage', () => {
    localStorage.setItem('nuvy-tema', 'claro');
    const tema = criar('server');
    expect(tema.modo()).toBe('escuro');
    localStorage.clear();

    tema.definir('claro');

    expect(tema.modo()).toBe('claro');
    expect(html.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('nuvy-tema')).toBeNull();
  });
});
