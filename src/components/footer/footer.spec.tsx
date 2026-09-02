import { render, screen } from '@testing-library/react';
import { PROFILE } from '../../consts';
import { Footer } from './index';

describe('Footer', () => {
  it('renderiza o landmark de rodapé', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('aponta as redes sociais para os perfis corretos', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', { name: 'Perfil no GitHub' }),
    ).toHaveAttribute('href', PROFILE.github);
    expect(
      screen.getByRole('link', { name: 'Perfil no LinkedIn' }),
    ).toHaveAttribute('href', PROFILE.linkedIn);
    expect(screen.getByRole('link', { name: 'Enviar e-mail' })).toHaveAttribute(
      'href',
      `mailto:${PROFILE.email}`,
    );
  });

  it('abre os perfis externos em nova aba com rel seguro', () => {
    render(<Footer />);

    for (const name of ['Perfil no GitHub', 'Perfil no LinkedIn']) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('renderiza identidade e localização', () => {
    render(<Footer />);

    expect(screen.getByText(PROFILE.fullName)).toBeInTheDocument();
    expect(screen.getByText(PROFILE.title)).toBeInTheDocument();
    expect(screen.getByText(PROFILE.location)).toBeInTheDocument();
  });

  it('renderiza o copyright com o ano corrente', () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()}`)),
    ).toBeInTheDocument();
  });
});
