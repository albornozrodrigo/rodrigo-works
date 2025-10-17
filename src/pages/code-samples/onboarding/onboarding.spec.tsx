import { render, screen } from '@testing-library/react';
import OnboardingPage from './index';

// Mock do componente VueWrapper
jest.mock('../../../components/vue-wrapper', () => ({
  __esModule: true,
  default: () => <div data-testid="vue-wrapper">Vue Onboarding Component</div>,
}));

describe('Onboarding Page', () => {
  it('deve renderizar a página de Onboarding corretamente', () => {
    render(<OnboardingPage />);

    const title = screen.getByText('Onboarding - VueJS');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('mb-8', 'text-4xl', 'font-bold');
  });

  it('deve renderizar a descrição do projeto', () => {
    render(<OnboardingPage />);

    const description = screen.getByText(
      /Componente de Onboarding feito utilizando/,
    );
    expect(description).toBeInTheDocument();

    const technologies = screen.getByText(/VueJS/, { exact: false });
    const typescript = screen.getByText(/TypeScript/, { exact: false });
    const tailwind = screen.getByText(/TailwindCSS/, { exact: false });

    expect(technologies).toBeInTheDocument();
    expect(typescript).toBeInTheDocument();
    expect(tailwind).toBeInTheDocument();
  });

  it('deve renderizar o link do projeto (Micro Frontend)', () => {
    render(<OnboardingPage />);

    const projectLink = screen.getByRole('link', {
      name: /https:\/\/onboarding-flame-pi\.vercel\.app\//,
    });
    expect(projectLink).toBeInTheDocument();
    expect(projectLink).toHaveAttribute(
      'href',
      'https://onboarding-flame-pi.vercel.app/',
    );
    expect(projectLink).toHaveAttribute('target', '_blank');
    expect(projectLink).toHaveAttribute('rel', 'noreferrer');
    expect(projectLink).toHaveClass('underline');
  });

  it('deve renderizar o link do repositório no GitHub', () => {
    render(<OnboardingPage />);

    const githubLink = screen.getByRole('link', {
      name: /https:\/\/github\.com\/albornozrodrigo\/onboarding/,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/albornozrodrigo/onboarding',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
    expect(githubLink).toHaveClass('underline');
  });

  it('deve renderizar o alerta sobre Micro Frontend', () => {
    render(<OnboardingPage />);

    const alert = screen.getByText(
      /Este componente está sendo renderizado como um/,
    );
    expect(alert).toBeInTheDocument();

    const microFrontendText = screen.getByText(/Micro Frontend/);
    const moduleFederationText = screen.getByText(/Module Federation/);

    expect(microFrontendText).toBeInTheDocument();
    expect(moduleFederationText).toBeInTheDocument();
  });

  it('deve renderizar o componente VueWrapper dentro do Suspense', () => {
    render(<OnboardingPage />);

    const vueWrapper = screen.getByTestId('vue-wrapper');
    expect(vueWrapper).toBeInTheDocument();
  });

  it('deve ter as classes CSS corretas no container principal', () => {
    render(<OnboardingPage />);

    const container = screen
      .getByText('Onboarding - VueJS')
      .closest('.container');
    expect(container).toHaveClass('container', 'mx-auto', 'max-w-3xl', 'px-6');
  });

  it('deve ter o gradiente de fundo correto', () => {
    render(<OnboardingPage />);

    const background = screen
      .getByText('Onboarding - VueJS')
      .closest('.bg-gradient-to-br');
    expect(background).toHaveClass(
      'bg-gradient-to-br',
      'py-20',
      'dark:from-indigo-950',
      'dark:via-neutral-950',
      'dark:to-indigo-950',
    );
  });

  it('deve ter o alerta com as classes corretas', () => {
    render(<OnboardingPage />);

    const alert = screen
      .getByText(/Este componente está sendo renderizado como um/)
      .closest('.alert');
    expect(alert).toHaveClass('alert', 'alert-success');
  });

  it('deve ter o wrapper do componente Vue com as classes corretas', () => {
    render(<OnboardingPage />);

    const wrapper = screen.getByTestId('vue-wrapper').closest('div');
    expect(wrapper).toHaveClass(
      'mx-auto',
      'flex',
      'min-h-screen',
      'w-full',
      'items-center',
      'justify-center',
      'text-gray-500',
    );
  });
});

