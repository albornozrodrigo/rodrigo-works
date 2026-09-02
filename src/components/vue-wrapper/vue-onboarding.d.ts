/**
 * Declara a tag do Custom Element publicado pelo micro frontend Vue, para que o
 * TSX aceite `<vue-onboarding />`. Fica em um `.d.ts` próprio porque a regra
 * `@typescript-eslint/no-namespace` proíbe `declare namespace` em arquivo de
 * implementação.
 */
import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'vue-onboarding': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
