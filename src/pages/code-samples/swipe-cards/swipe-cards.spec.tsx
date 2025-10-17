import { act, render, screen } from '@testing-library/react';
import SwipeCardsPage from './index';

describe('SwipeCardsPage', () => {
  it('should render the component correctly', async () => {
    act(() => {
      render(<SwipeCardsPage />);
    });

    expect(
      await screen.findByText('Swipe Cards - ReactJS'),
    ).toBeInTheDocument();
  });

  // it('renders the description correctly', () => {
  //   render(<SwipeCardsPage />);
  //   expect(
  //     screen.getByText(
  //       'Componente de Swipe Cards feito utilizando ReactJS, TypeScript, TailwindCSS e Framer Motion, inspirado em aplicativos de relacionamento.',
  //     ),
  //   ).toBeInTheDocument();
  // });

  // it('renders the links correctly', () => {
  //   render(<SwipeCardsPage />);
  //   expect(
  //     screen.getByRole('link', {
  //       name: /https:\/\/swipe-cards-beryl\.vercel\.app\//,
  //     }),
  //   ).toBeInTheDocument();
  //   expect(
  //     screen.getByRole('link', {
  //       name: /https:\/\/github\.com\/albornozrodrigo\/swipe-cards/,
  //     }),
  //   ).toBeInTheDocument();
  // });

  // it('renders the alert correctly', () => {
  //   render(<SwipeCardsPage />);
  //   expect(
  //     screen.getByText(
  //       'Este componente está sendo renderizado como um Micro Frontend utilizando Module Federation.',
  //     ),
  //   ).toBeInTheDocument();
  // });

  // it('renders the SwipeCards component correctly', () => {
  //   render(<SwipeCardsPage />);
  //   expect(screen.getByRole('img', { name: /user 1/i })).toBeInTheDocument();
  //   expect(screen.getByRole('img', { name: /user 2/i })).toBeInTheDocument();
  //   expect(screen.getByRole('img', { name: /user 3/i })).toBeInTheDocument();
  //   expect(screen.getByRole('img', { name: /user 4/i })).toBeInTheDocument();
  // });

  // test('mostra fallback enquanto carrega o microfrontend', async () => {
  //   act(() => {
  //     render(<SwipeCardsPage />);
  //   });

  //   expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  // });

  it('should render the microfrontend correctly', async () => {
    act(() => {
      render(<SwipeCardsPage />);
    });

    expect(screen.getByTestId('swipe-cards')).toBeInTheDocument();
    expect(
      await screen.findByText(/SwipeCards Renderizado/i),
    ).toBeInTheDocument();

    expect(await screen.findByText(/Usuários: 2/)).toBeInTheDocument();
  });
});
