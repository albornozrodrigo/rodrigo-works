import { render, screen } from '@testing-library/react';
import { users } from './data';
import SwipeCardsPage from './index';

describe('SwipeCardsPage', () => {
  it('renderiza o título da página', async () => {
    render(<SwipeCardsPage />);

    expect(
      await screen.findByRole('heading', {
        name: 'Swipe Cards - ReactJS',
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it('aponta para o micro frontend e o repositório', async () => {
    render(<SwipeCardsPage />);

    expect(
      screen.getByRole('link', {
        name: 'https://swipe-cards-beryl.vercel.app/',
      }),
    ).toHaveAttribute('rel', 'noopener noreferrer');
    expect(
      screen.getByRole('link', {
        name: 'https://github.com/albornozrodrigo/swipe-cards',
      }),
    ).toBeInTheDocument();
  });

  it('carrega o micro frontend e repassa a lista de usuários', async () => {
    render(<SwipeCardsPage />);

    // O remote entra por React.lazy: precisa de findBy*, não getBy*.
    expect(await screen.findByTestId('swipe-cards')).toBeInTheDocument();
    expect(
      await screen.findByText(`Usuários: ${users.length}`),
    ).toBeInTheDocument();
  });
});
