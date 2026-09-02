import { lazy, PropsWithChildren, Suspense, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Divider } from './components/divider';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { CASES, CODE_SAMPLES, PROJECTS, ROUTES } from './consts';
import Home from './pages/home';

/**
 * Só a Home entra no bundle inicial. As páginas de case são documentos longos
 * que quase ninguém abre na primeira visita — carregá-las sob demanda tira
 * dezenas de KB do carregamento inicial.
 */
const Store = lazy(() => import('./pages/cases-projects/store-api'));
const AppBroker = lazy(() => import('./pages/cases-projects/app-broker'));
const FreightLogin = lazy(() => import('./pages/cases-projects/feight-login'));
const Loveg = lazy(() => import('./pages/cases-projects/loveg'));
const GraphQLApiSchemaFirst = lazy(
  () => import('./pages/cases-projects/graphql-schema-first'),
);
const GraphQLApiCodeFirst = lazy(
  () => import('./pages/cases-projects/graphql-code-first'),
);
const SwipeCards = lazy(() => import('./pages/code-samples/swipe-cards'));
const Onboarding = lazy(() => import('./pages/code-samples/onboarding'));
const Cv = lazy(() => import('./pages/cv'));
const NotFound = lazy(() => import('./pages/not-found'));

const Wrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

const RouteFallback = () => (
  <div
    className="flex min-h-screen items-center justify-center"
    role="status"
    aria-live="polite"
  >
    <span className="loading loading-dots loading-lg text-primary" />
    <span className="sr-only">Carregando…</span>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CV} element={<Cv />} />
            <Route path={CASES.STORE} element={<Store />} />
            <Route path={CASES.APP_BROKER} element={<AppBroker />} />
            <Route path={CASES.FREIGHT_LOGIN} element={<FreightLogin />} />
            <Route path={PROJECTS.LOVEG} element={<Loveg />} />
            <Route path={CODE_SAMPLES.SWIPE_CARDS} element={<SwipeCards />} />
            <Route path={CODE_SAMPLES.ONBOARDING} element={<Onboarding />} />
            <Route
              path={CODE_SAMPLES.GQL_API_SCHEMA_FIRST}
              element={<GraphQLApiSchemaFirst />}
            />
            <Route
              path={CODE_SAMPLES.GQL_API_CODE_FIRST}
              element={<GraphQLApiCodeFirst />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Wrapper>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
