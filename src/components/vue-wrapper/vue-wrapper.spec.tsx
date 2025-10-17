import { act, render, screen } from '@testing-library/react';
import VueWrapper from './index';

describe('VueWrapper', () => {
  it('should render the component correctly', async () => {
    act(() => {
      render(<VueWrapper />);
    });

    expect(screen.getByTestId('vue-wrapper')).toBeInTheDocument();
    expect(screen.getByText('Vue Onboarding Component')).toBeInTheDocument();
  });

  it('should render the microfrontend correctly', async () => {
    act(() => {
      render(<VueWrapper />);
    });

    expect(screen.getByTestId('onboarding')).toBeInTheDocument();
    expect(
      await screen.findByText(/Onboarding Renderizado/i),
    ).toBeInTheDocument();

    expect(await screen.findByText(/Usuários: 2/)).toBeInTheDocument();
  });
});
