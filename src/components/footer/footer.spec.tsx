import { render, screen } from '@testing-library/react';
import { Footer } from './index';

describe('Footer', () => {
  it('deve renderizar o componente Footer corretamente', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass(
      'footer',
      'footer-center',
      'p-10',
      'bg-base-300',
      'text-base-content',
    );
  });

  it('deve renderizar os links de redes sociais', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);
    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeInTheDocument();
    expect(links[2]).toBeInTheDocument();
  });

  it('deve ter os links com URLs corretas', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute(
      'href',
      'https://github.com/albornozrodrigo/',
    );
    expect(links[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/albornozrodrigo/',
    );
    expect(links[2]).toHaveAttribute(
      'href',
      'mailto:rodrigo.albornoz.f@gmail.com',
    );
  });

  it('deve ter os links abrindo em nova aba', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute('target', '_blank');
    expect(links[1]).toHaveAttribute('target', '_blank');
  });

  it('deve renderizar o nome do desenvolvedor', () => {
    render(<Footer />);

    const name = screen.getByText('Rodrigo Albornoz Figueiredo');
    expect(name).toBeInTheDocument();
    expect(name).toHaveClass('font-bold', 'text-lg', 'gradient-text');
  });

  it('deve renderizar a descrição do cargo', () => {
    render(<Footer />);

    const title = screen.getByText(
      'Senior Front-End Developer | Full-Stack Developer',
    );
    const location = screen.getByText('São Paulo, SP - Brasil');

    expect(title).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });

  it('deve renderizar o copyright com o ano atual', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `© ${currentYear} - Desenvolvido com ❤️ usando TailwindCSS + DaisyUI`,
    );

    expect(copyrightText).toBeInTheDocument();
    expect(copyrightText).toHaveClass('text-sm', 'opacity-70');
  });

  it('deve ter as classes CSS corretas nos links de redes sociais', () => {
    render(<Footer />);

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveClass('hover:text-primary', 'transition-colors');
    expect(links[1]).toHaveClass('hover:text-primary', 'transition-colors');
    expect(links[2]).toHaveClass('hover:text-primary', 'transition-colors');
  });
});
