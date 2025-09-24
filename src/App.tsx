import './App.css';
import { Footer } from './components/footer';
import About from './pages/home/components/about';
import { Header } from './pages/home/components/header';
import Projects from './pages/home/components/projects';
import { Skills } from './pages/home/components/skills';

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-neutral-950 to-indigo-950">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
