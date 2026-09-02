import { Divider } from '../../components/divider';
import { Seo } from '../../components/seo';
import { PROFILE, SITE_URL } from '../../consts';
import { EXPERIENCES, SKILLS } from '../../data/cv';
import { About } from './components/about';
import { Articles } from './components/articles';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import './home.css';

/** Dados estruturados schema.org — ajudam o Google a montar o painel de pessoa. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.fullName,
  alternateName: PROFILE.name,
  jobTitle: PROFILE.title,
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  sameAs: [PROFILE.github, PROFILE.linkedIn],
  address: {
    '@type': 'PostalAddress',
    addressLocality: PROFILE.city,
    addressCountry: 'BR',
  },
  worksFor: EXPERIENCES.filter(job => job.current).map(job => ({
    '@type': 'Organization',
    name: job.company,
  })),
  knowsAbout: [...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.devops],
};

export default function Home() {
  return (
    <div className="bg-linear-to-br from-indigo-950 via-neutral-950 to-indigo-950">
      <Seo
        title={`${PROFILE.name} — Desenvolvedor Front-End | Full Stack`}
        description="Portfólio com cases técnicos de marketplace, autenticação corporativa, apps em máquinas de POS e micro frontends com Module Federation."
        path="/"
        type="profile"
      />
      <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>

      <Header />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Articles />
    </div>
  );
}
