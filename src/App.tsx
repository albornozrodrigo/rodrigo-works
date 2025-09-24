import { Route, Routes } from 'react-router-dom';
import { Divider } from './components/divider';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { CASES, PROJECTS } from './consts';
import Home from './pages/home';
import Loveg from './pages/loveg';
import Store from './pages/store-api';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={CASES.STORE} element={<Store />} />
        <Route path={CASES.APP_BROKER} element={<Store />} />
        <Route path={CASES.FREIGHT_LOGIN} element={<Store />} />
        <Route path={PROJECTS.LOVEG} element={<Loveg />} />
      </Routes>
      <Divider />
      <Footer />
    </>
  );
}

export default App;
