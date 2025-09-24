import { Animation } from '../../../../components/animation';
import { SectionTitle } from '../../../../components/section-title';
import { AppBroker } from './app-broker';
import { FreightLogin } from './freight-login';
import { Loveg } from './loveg';
import { Store } from './store';

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Cases e Projetos" />

        <div className="grid gap-8 lg:grid-cols-2">
          <Animation x={-50} once={true}>
            <Store />
          </Animation>

          <Animation x={50} once={true}>
            <FreightLogin />
          </Animation>

          <Animation x={-50} once={true}>
            <AppBroker />
          </Animation>

          <Animation x={50} once={true}>
            <Loveg />
          </Animation>
        </div>
      </div>
    </section>
  );
};
