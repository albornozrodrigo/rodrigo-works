import { HeartIcon, RocketIcon, UsersIcon } from 'lucide-react';
import { SectionTitle } from '../../../../components/section-title';
import useIntersectionObserver from '../../../../hooks/intersection-observer';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.25 });

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-indigo-950 via-neutral-950 to-indigo-950 py-20"
    >
      <div className="container mx-auto px-6">
        <SectionTitle title="Sobre Mim" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            ref={ref}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
            className="space-y-6"
          >
            <h3 className="mb-6 text-2xl font-bold">Resumo profissional</h3>
            <p className="text-lg leading-relaxed">
              Desenvolvedor Full-Stack com{' '}
              <strong>15 anos de experiência</strong> especializado em{' '}
              <strong>React</strong>, <strong>Node.js</strong> e arquiteturas
              modernas. Expertise em desenvolvimento de aplicações de suporte
              para e-commerce, com foco em performance, UX/UI e sistemas
              distribuídos.
            </p>

            <p className="text-lg leading-relaxed">
              Experiência desde startups até grandes corporações, com
              proficiência em refatoração de sistemas monolíticos e criação de
              sistemas do zero.
            </p>

            <div className="stats stats-vertical lg:stats-horizontal w-full text-center shadow">
              <div className="stat">
                <div className="stat-title">Experiência</div>
                <div className="stat-value text-primary">15+</div>
                <div className="stat-desc">Anos</div>
              </div>
              <div className="stat">
                <div className="stat-title">Projetos</div>
                <div className="stat-value text-secondary">50+</div>
                <div className="stat-desc">Concluídos</div>
              </div>
              <div className="stat">
                <div className="stat-title">Tecnologias</div>
                <div className="stat-value text-accent">20+</div>
                <div className="stat-desc">Dominadas</div>
              </div>
            </div>
          </div>

          <div
            ref={ref}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
            className="space-y-6"
          >
            <h3 className="mb-6 text-2xl font-bold">Principais Conquistas</h3>

            <div className="space-y-4">
              <div className="card bg-base-100 card-hover shadow-lg">
                <div className="card-body">
                  <h4 className="card-title text-primary">
                    <UsersIcon className="mr-2" />
                    Mentoria Técnica
                  </h4>
                  <p>
                    Mentor técnico no programa de rotação de estágio da
                    americanas s.a., orientando estagiários em projetos
                    Front-End.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 card-hover shadow-lg">
                <div className="card-body">
                  <h4 className="card-title text-secondary">
                    <RocketIcon className="mr-2" />
                    Modernização de Sistemas
                  </h4>
                  <p>
                    Migração de sistema monolítico Java para arquitetura moderna
                    NextJS/NestJS.
                  </p>
                </div>
              </div>

              <div className="card bg-base-100 card-hover shadow-lg">
                <div className="card-body">
                  <h4 className="card-title text-accent">
                    <HeartIcon className="mr-2" />
                    Loveg
                  </h4>
                  <p>
                    Fundação da primeira plataforma de relacionamento para
                    vegetarianos/veganos do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
