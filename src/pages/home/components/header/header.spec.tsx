import { render, screen, waitFor } from '@testing-library/react';
import { Header } from './index';

describe('header component', () => {
  test('should display the info correctly', async () => {
    render(<Header />);

    await waitFor(
      () => {
        expect(screen.getByText('Rodrigo Albornoz')).toBeInTheDocument();
      },
      {
        timeout: 5000,
      },
    );

    const react = screen.getAllByText('React');

    expect(react[0]).toBeInTheDocument();
    expect(screen.getByText('null')).toBeInTheDocument();
    expect(screen.getByText('São Paulo')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('NextJS')).toBeInTheDocument();
    expect(screen.getByText('NestJS')).toBeInTheDocument();
    expect(screen.getByText('React Query')).toBeInTheDocument();
    expect(screen.getByText('TailwindCSS')).toBeInTheDocument();
    expect(screen.getByText('Zustand')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('true')).toBeInTheDocument();
  });
});
