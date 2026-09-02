import { render, screen } from '@testing-library/react';
import VueWrapper from './index';

describe('VueWrapper', () => {
  it('exibe o fallback enquanto o remote não carregou', () => {
    render(<VueWrapper />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('registra o custom element do remote e o renderiza', async () => {
    render(<VueWrapper />);

    // O import dinâmico do remote resolve em microtask; o findBy* aguarda.
    expect(await screen.findByTestId('onboarding')).toBeInTheDocument();
    expect(
      await screen.findByText(/Onboarding Renderizado/i),
    ).toBeInTheDocument();
    expect(customElements.get('vue-onboarding')).toBeDefined();
  });
});
