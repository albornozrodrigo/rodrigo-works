import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './index';

describe('home component', () => {
  test('should render all the children components', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    waitFor(() => {
      expect(
        screen.getByText(
          'Desenvolvedor Front-End / Full Stack com mais de dez anos de experiência',
        ),
      ).toBeInTheDocument();
    });
    expect(screen.getByText('Stack de Tecnologias')).toBeInTheDocument();
    expect(screen.getByText('Resumo profissional')).toBeInTheDocument();
    expect(screen.getByText('Cases e Projetos')).toBeInTheDocument();
  });
});
