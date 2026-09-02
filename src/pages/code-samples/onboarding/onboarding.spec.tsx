import { render, screen } from '@testing-library/react';
import OnboardingPage from './index';

vi.mock('../../../components/vue-wrapper', () => ({
  default: () => <div data-testid="vue-wrapper">Vue Onboarding Component</div>,
}));

describe('Onboarding Page', () => {
  it('renderiza o título da página', () => {
    render(<OnboardingPage />);

    expect(
      screen.getByRole('heading', { name: 'Onboarding - VueJS', level: 1 }),
    ).toBeInTheDocument();
  });

  it('renderiza a descrição do projeto', () => {
    render(<OnboardingPage />);

    expect(
      screen.getByText(/Componente de Onboarding feito utilizando/),
    ).toBeInTheDocument();
  });

  it('aponta para o micro frontend publicado', () => {
    render(<OnboardingPage />);

    const link = screen.getByRole('link', {
      name: 'https://onboarding-flame-pi.vercel.app/',
    });

    expect(link).toHaveAttribute(
      'href',
      'https://onboarding-flame-pi.vercel.app/',
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('aponta para o repositório no GitHub', () => {
    render(<OnboardingPage />);

    const link = screen.getByRole('link', {
      name: 'https://github.com/albornozrodrigo/onboarding',
    });

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/albornozrodrigo/onboarding',
    );
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('explica que o componente vem via Module Federation', () => {
    render(<OnboardingPage />);

    expect(
      screen.getByText(/Este componente está sendo renderizado como um/),
    ).toBeInTheDocument();
  });

  it('renderiza o wrapper do micro frontend', () => {
    render(<OnboardingPage />);

    expect(screen.getByTestId('vue-wrapper')).toBeInTheDocument();
  });
});
