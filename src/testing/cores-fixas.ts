/**
 * Classes de cor fixa do Tailwind (ex.: `bg-green-700`, `text-white`) usadas
 * no elemento e nos filhos. O app usa só os tokens do tema NuvyTech
 * (`bg-primary`, `text-destructive`...), para o claro e o escuro funcionarem
 * sozinhos; os testes esperam esta lista vazia.
 */
const COR_FIXA =
  /^(?:[a-z-]+:)*(?:bg|text|border|ring|outline|from|to|fill|stroke)-(?:white|black|(?:gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3})(?:\/\d+)?$/;

export function classesDeCorFixa(elemento: HTMLElement): string[] {
  const todos = [elemento, ...Array.from(elemento.querySelectorAll('*'))];
  const encontradas = new Set<string>();
  for (const el of todos) {
    for (const classe of Array.from(el.classList)) {
      if (COR_FIXA.test(classe.replace(/^!/, ''))) {
        encontradas.add(classe);
      }
    }
  }
  return [...encontradas];
}
