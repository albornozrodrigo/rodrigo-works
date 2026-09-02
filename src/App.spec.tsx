import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Mock dos componentes filhos para focar o teste no roteamento.
vi.mock('./components/navbar', () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock('./components/footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

vi.mock('./components/divider', () => ({
  Divider: () => <div data-testid="divider">Divider</div>,
}));

vi.mock('./pages/home', () => ({
  default: () => <div data-testid="home">Home Page</div>,
}));

vi.mock('./pages/cv', () => ({
  default: () => <div data-testid="cv">CV Page</div>,
}));

vi.mock('./pages/not-found', () => ({
  default: () => <div data-testid="not-found">Not Found Page</div>,
}));

vi.mock('./pages/cases-projects/store-api', () => ({
  default: () => <div data-testid="store">Store Page</div>,
}));

vi.mock('./pages/cases-projects/app-broker', () => ({
  default: () => <div data-testid="app-broker">App Broker Page</div>,
}));

vi.mock('./pages/cases-projects/feight-login', () => ({
  default: () => <div data-testid="freight-login">Freight Login Page</div>,
}));

vi.mock('./pages/cases-projects/loveg', () => ({
  default: () => <div data-testid="loveg">Loveg Page</div>,
}));

vi.mock('./pages/cases-projects/graphql-schema-first', () => ({
  default: () => <div data-testid="graphql-schema-first">Schema First</div>,
}));

vi.mock('./pages/cases-projects/graphql-code-first', () => ({
  default: () => <div data-testid="graphql-code-first">Code First</div>,
}));

vi.mock('./pages/code-samples/swipe-cards', () => ({
  default: () => <div data-testid="swipe-cards">Swipe Cards Page</div>,
}));

vi.mock('./pages/code-samples/onboarding', () => ({
  default: () => <div data-testid="onboarding">Onboarding Page</div>,
}));

const renderAt = (route = '/') =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );

describe('App', () => {
  it('renderiza navbar, conteúdo e footer', async () => {
    renderAt('/');

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('divider')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  // Todas as rotas abaixo passam por React.lazy + Suspense, então a asserção
  // precisa ser assíncrona: o chunk só resolve depois de uma microtask.
  it.each([
    ['/cv', 'cv'],
    ['/cases/store', 'store'],
    ['/cases/app-broker', 'app-broker'],
    ['/cases/freight-login', 'freight-login'],
    ['/projects/loveg-v1-v2', 'loveg'],
    ['/code-samples/swipe-cards', 'swipe-cards'],
    ['/code-samples/onboarding', 'onboarding'],
    ['/code-samples/graphql-api-schema-first', 'graphql-schema-first'],
    ['/code-samples/graphql-api-code-first', 'graphql-code-first'],
  ])('renderiza a página de %s', async (route, testId) => {
    renderAt(route);

    expect(await screen.findByTestId(testId)).toBeInTheDocument();
  });

  it('cai na página 404 em rota desconhecida', async () => {
    renderAt('/rota/que/nao/existe');

    expect(await screen.findByTestId('not-found')).toBeInTheDocument();
  });
});
