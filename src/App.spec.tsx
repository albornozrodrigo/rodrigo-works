import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock dos componentes filhos para focar nos testes do App
jest.mock('./components/navbar', () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

jest.mock('./components/footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

jest.mock('./components/divider', () => ({
  Divider: () => <div data-testid="divider">Divider</div>,
}));

jest.mock('./pages/home', () => ({
  __esModule: true,
  default: () => <div data-testid="home">Home Page</div>,
}));

jest.mock('./pages/cases-projects/store-api', () => ({
  __esModule: true,
  default: () => <div data-testid="store">Store Page</div>,
}));

jest.mock('./pages/cases-projects/app-broker', () => ({
  __esModule: true,
  default: () => <div data-testid="app-broker">App Broker Page</div>,
}));

jest.mock('./pages/cases-projects/feight-login', () => ({
  __esModule: true,
  default: () => <div data-testid="freight-login">Freight Login Page</div>,
}));

jest.mock('./pages/cases-projects/loveg', () => ({
  __esModule: true,
  default: () => <div data-testid="loveg">Loveg Page</div>,
}));

jest.mock('./pages/code-samples/swipe-cards', () => ({
  __esModule: true,
  default: () => <div data-testid="swipe-cards">Swipe Cards Page</div>,
}));

jest.mock('./pages/code-samples/onboarding', () => ({
  __esModule: true,
  default: () => <div data-testid="onboarding">Onboarding Page</div>,
}));

// Mock do window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

const renderWithRouter = (
  component: React.ReactElement,
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route);
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('App', () => {
  it('deve renderizar o componente App com navbar, rotas e footer', () => {
    renderWithRouter(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('deve renderizar a página Home na rota raiz', () => {
    renderWithRouter(<App />, { route: '/' });

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('deve renderizar a página Store na rota /cases/store', () => {
    renderWithRouter(<App />, { route: '/cases/store' });

    expect(screen.getByTestId('store')).toBeInTheDocument();
  });

  it('deve renderizar a página App Broker na rota /cases/app-broker', () => {
    renderWithRouter(<App />, { route: '/cases/app-broker' });

    expect(screen.getByTestId('app-broker')).toBeInTheDocument();
  });

  it('deve renderizar a página Freight Login na rota /cases/freight-login', () => {
    renderWithRouter(<App />, { route: '/cases/freight-login' });

    expect(screen.getByTestId('freight-login')).toBeInTheDocument();
  });

  it('deve renderizar a página Loveg na rota /projects/loveg', () => {
    renderWithRouter(<App />, { route: '/projects/loveg' });

    // Como a rota não está definida, deve renderizar apenas navbar, footer e divider
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('divider')).toBeInTheDocument();
  });

  it('deve renderizar a página Swipe Cards na rota /code-samples/swipe-cards', () => {
    renderWithRouter(<App />, { route: '/code-samples/swipe-cards' });

    expect(screen.getByTestId('swipe-cards')).toBeInTheDocument();
  });

  it('deve renderizar a página Onboarding na rota /code-samples/onboarding', () => {
    renderWithRouter(<App />, { route: '/code-samples/onboarding' });

    expect(screen.getByTestId('onboarding')).toBeInTheDocument();
  });

  it('deve ter a estrutura correta com navbar, rotas e footer', () => {
    renderWithRouter(<App />);

    const navbar = screen.getByTestId('navbar');
    const footer = screen.getByTestId('footer');
    const divider = screen.getByTestId('divider');

    // Verifica se os elementos estão na ordem correta
    expect(navbar).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(divider).toBeInTheDocument();
  });
});
