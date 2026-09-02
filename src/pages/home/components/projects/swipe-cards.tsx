import { LayersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const SwipeCards = () => {
  return (
    <Card>
      <h3 className="card-title text-warning flex justify-between">
        <Link to={CODE_SAMPLES.SWIPE_CARDS} className="flex items-center gap-2">
          <LayersIcon className="size-4" aria-hidden="true" />
          Swipe Cards
        </Link>
        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link to={CODE_SAMPLES.SWIPE_CARDS}>
        Componente de cards arrastáveis em React, TypeScript e Framer Motion,
        inspirado em apps de relacionamento. Vive em um repositório próprio e é
        consumido por este site em tempo de execução via Module Federation — não
        é um clone do código, é o build do outro projeto.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">Micro Frontend</span>
        <span className="badge badge-accent">React</span>
        <span className="badge badge-secondary">Framer Motion</span>
      </div>
    </Card>
  );
};
