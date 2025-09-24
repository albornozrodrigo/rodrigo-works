import { PropsWithChildren, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Divider } from './components/divider';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { CASES, PROJECTS } from './consts';
import AppBroker from './pages/cases-projects/app-broker';
import FreightLogin from './pages/cases-projects/feight-login';
import Loveg from './pages/cases-projects/loveg';
import Store from './pages/cases-projects/store-api';
import Home from './pages/home';

const Wrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={CASES.STORE} element={<Store />} />
          <Route path={CASES.APP_BROKER} element={<AppBroker />} />
          <Route path={CASES.FREIGHT_LOGIN} element={<FreightLogin />} />
          <Route path={PROJECTS.LOVEG} element={<Loveg />} />
        </Routes>
      </Wrapper>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
