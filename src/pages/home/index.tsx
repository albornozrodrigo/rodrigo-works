import { Divider } from '../../components/divider';
import { About } from './components/about';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import './home.css';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-neutral-950 to-indigo-950">
      <Header />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
    </div>
  );
}
