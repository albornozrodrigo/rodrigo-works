import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PROFILE } from '../../../../consts';
import { Header } from './index';

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe('header component', () => {
  it('digita o nome no terminal', async () => {
    renderHeader();

    expect(
      await screen.findByText(PROFILE.name, {}, { timeout: 5000 }),
    ).toBeInTheDocument();
  });

  it('mostra empresa, localização e disponibilidade no terminal', () => {
    renderHeader();

    expect(screen.getByText('Sympla')).toBeInTheDocument();
    expect(screen.getByText(PROFILE.city)).toBeInTheDocument();
    expect(screen.getByText('false')).toBeInTheDocument();
  });

  it('lista as skills em destaque', () => {
    renderHeader();

    for (const skill of [
      'TypeScript',
      'NextJS',
      'NestJS',
      'React Query',
      'TailwindCSS',
      'Zustand',
      'MongoDB',
      'Docker',
    ]) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }

    // "React" aparece também dentro de "React Query".
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  });

  it('oferece o currículo em página e em PDF', () => {
    renderHeader();

    expect(
      screen.getByRole('link', { name: 'Currículo completo' }),
    ).toHaveAttribute('href', '/cv');
    expect(screen.getByRole('link', { name: /PDF/ })).toHaveAttribute(
      'href',
      PROFILE.resume,
    );
  });
});
