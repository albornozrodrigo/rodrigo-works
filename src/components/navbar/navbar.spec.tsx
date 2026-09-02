import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './index';

const renderAt = (route: string) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('leva o logo para a home', () => {
    renderAt('/');

    expect(
      screen.getByRole('link', { name: '<rodrigo.works>' }),
    ).toHaveAttribute('href', '/');
  });

  it('mostra as âncoras das seções quando está na home', () => {
    renderAt('/');

    expect(screen.getByRole('link', { name: 'Sobre' })).toHaveAttribute(
      'href',
      '#about',
    );
    expect(screen.getByRole('link', { name: 'Stack' })).toHaveAttribute(
      'href',
      '#skills',
    );
    expect(screen.getByRole('link', { name: 'Projetos' })).toHaveAttribute(
      'href',
      '#projects',
    );
  });

  it('esconde as âncoras de seção fora da home, onde elas não existem', () => {
    renderAt('/cases/store');

    expect(
      screen.queryByRole('link', { name: 'Sobre' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: 'Stack' }),
    ).not.toBeInTheDocument();
  });

  it('expõe o link do currículo em qualquer rota', () => {
    renderAt('/cases/store');

    expect(screen.getByRole('link', { name: 'Currículo' })).toHaveAttribute(
      'href',
      '/cv',
    );
  });
});
