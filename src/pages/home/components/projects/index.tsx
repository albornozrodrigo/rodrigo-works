import { Animation } from '../../../../components/animation';
import { SectionTitle } from '../../../../components/section-title';
import { AppBroker } from './app-broker';
import { FreightLogin } from './freight-login';
import { GraphqlApiCodeFirst } from './graphql-code-first';
import { GraphqlApiSchemaFirst } from './graphql-schema-first';
import { Loveg } from './loveg';
import { Onboarding } from './onboarding';
import { Store } from './store';
import { SwipeCards } from './swipe-cards';

/**
 * Chave explícita em vez de `Component.name`: o minificador do build renomeia
 * as funções e derrubaria a identidade dos itens da lista.
 */
const CARDS = [
  { id: 'store', Component: Store },
  { id: 'freight-login', Component: FreightLogin },
  { id: 'app-broker', Component: AppBroker },
  { id: 'loveg', Component: Loveg },
  { id: 'swipe-cards', Component: SwipeCards },
  { id: 'onboarding', Component: Onboarding },
  { id: 'graphql-schema-first', Component: GraphqlApiSchemaFirst },
  { id: 'graphql-code-first', Component: GraphqlApiCodeFirst },
];

export const Projects = () => {
  return (
    <section id="projects" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Cases e Projetos" />

        <div className="grid gap-8 lg:grid-cols-2">
          {CARDS.map(({ id, Component }, index) => (
            <Animation key={id} x={index % 2 === 0 ? -50 : 50} once={true}>
              <Component />
            </Animation>
          ))}
        </div>
      </div>
    </section>
  );
};
