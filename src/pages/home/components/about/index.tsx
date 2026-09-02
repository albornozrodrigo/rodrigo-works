import { Animation } from '../../../../components/animation';
import { SectionTitle } from '../../../../components/section-title';
import { WavingHand } from '../../../../components/waving-hand';
import { PROFILE } from '../../../../consts';
import { EXPERIENCES, SKILLS, yearsOfExperience } from '../../../../data/cv';

const totalTechnologies = Object.values(SKILLS).reduce(
  (total, list) => total + list.length,
  0,
);

export const About = () => {
  const years = yearsOfExperience();
  const companies = EXPERIENCES.length;

  return (
    <section id="about" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Sobre Mim" />

        <Animation className="mx-auto max-w-xl" x={0} y={50} once={true}>
          <div className="space-y-6">
            <h3 className="mb-6 text-2xl font-bold">Resumo profissional</h3>
            <p className="text-lg leading-relaxed">
              <WavingHand />
              Olá! Sou o {PROFILE.firstName}, Desenvolvedor Front-End /
              Full-Stack com <strong>{years} anos de experiência</strong>,
              especializado no ecossistema{' '}
              <strong className="text-secondary">React</strong>,{' '}
              <strong className="text-secondary">Node.js</strong> e arquiteturas
              modernas. Expertise em aplicações de suporte a e-commerce e
              marketplaces de larga escala, PWAs com foco em performance, UX/UI
              e sistemas distribuídos / microserviços.
            </p>

            <p className="text-lg leading-relaxed">
              Experiência desde startups até grandes corporações, com
              proficiência em refatoração de sistemas legados e criação de
              sistemas do zero. Nos últimos anos venho trabalhando em produtos
              que precisam escalar para milhares de sellers e milhões de
              pedidos, onde a diferença entre uma boa e uma má decisão de
              arquitetura aparece rápido.
            </p>

            <div className="stats stats-vertical lg:stats-horizontal w-full text-center shadow">
              <div className="stat">
                <div className="stat-title">Experiência</div>
                <div className="stat-value text-primary">{years}</div>
                <div className="stat-desc">Anos</div>
              </div>
              <div className="stat">
                <div className="stat-title">Empresas</div>
                <div className="stat-value text-secondary">{companies}</div>
                <div className="stat-desc">Passagens</div>
              </div>
              <div className="stat">
                <div className="stat-title">Tecnologias</div>
                <div className="stat-value text-accent">
                  {totalTechnologies}
                </div>
                <div className="stat-desc">Dominadas</div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};
