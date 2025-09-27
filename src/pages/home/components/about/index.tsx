import { Animation } from '../../../../components/animation';
import { SectionTitle } from '../../../../components/section-title';

export const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Sobre Mim" />

        <Animation className="mx-auto max-w-xl" x={0} y={50} once={true}>
          <div className="space-y-6">
            <h3 className="mb-6 text-2xl font-bold">Resumo profissional</h3>
            <p className="text-lg leading-relaxed">
              <img
                src="/src/assets/images/waving-hand.gif"
                className="mr-2 mb-2.5 inline size-6.5"
                alt="hello"
              />
              Olá! Sou o Rodrigo, Desenvolvedor Front-End / Full-Stack com mais
              de
              <strong>10 anos de experiência</strong> especializado no
              ecossistema <strong className="text-secondary">React</strong>,{' '}
              <strong className="text-secondary">Node.js</strong> e arquiteturas
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
                <div className="stat-value text-primary">10+</div>
                <div className="stat-desc">Anos</div>
              </div>
              {/* <div className="stat">
                <div className="stat-title">Projetos</div>
                <div className="stat-value text-secondary">50+</div>
                <div className="stat-desc">Concluídos</div>
              </div> */}
              <div className="stat">
                <div className="stat-title">Tecnologias</div>
                <div className="stat-value text-accent">20+</div>
                <div className="stat-desc">Dominadas</div>
              </div>
            </div>
          </div>
        </Animation>
      </div>
    </section>
  );
};
