import { render, screen } from '@testing-library/react';
import { Navbar } from './index';

describe('Navbar', () => {
  it('deve renderizar o componente Navbar corretamente', () => {
    render(<Navbar />);

    const logoLink = screen.getByText('<rodrigo.works>');
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('deve ter as classes CSS corretas', () => {
    render(<Navbar />);

    const navbar = screen.getByText('<rodrigo.works>').closest('.navbar');
    expect(navbar).toHaveClass(
      'navbar',
      'absolute',
      'top-0',
      'left-0',
      'z-50',
      'bg-transparent',
      'text-white',
    );
  });

  it('deve ter o link do logo com as classes de hover corretas', () => {
    render(<Navbar />);

    const logoLink = screen.getByText('<rodrigo.works>');
    expect(logoLink).toHaveClass(
      'hover:text-secondary',
      'ml-2',
      'text-sm',
      'transition-all',
      'duration-300',
    );
  });

  it('deve renderizar o toggle de tema (mesmo que oculto)', () => {
    render(<Navbar />);

    const themeToggle = screen.getByRole('checkbox');
    expect(themeToggle).toBeInTheDocument();
    expect(themeToggle).toHaveAttribute('type', 'checkbox');
    expect(themeToggle).toHaveClass('theme-controller');
    expect(themeToggle).toHaveAttribute('value', 'dark');
  });

  it('deve ter o container do toggle com as classes corretas', () => {
    render(<Navbar />);

    const toggleContainer = screen.getByRole('checkbox').closest('.swap');
    expect(toggleContainer).toHaveClass('swap', 'swap-rotate', 'rounded-full');
  });
});

