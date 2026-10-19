// Preparação dos testes (Vitest + jsdom), carregada antes de cada arquivo de teste.
//
// O jsdom não implementa window.matchMedia, e o toaster do sonner da spartan
// usa matchMedia('(prefers-color-scheme: dark)') ao ser criado. Este dublê
// responde "não combina" e aceita os ouvintes sem fazer nada.
if (!window.matchMedia) {
  window.matchMedia = (consulta: string): MediaQueryList =>
    ({
      matches: false,
      media: consulta,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }) as MediaQueryList;
}
