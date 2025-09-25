import { SmartphoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const SwipeCards = () => {
  return (
    <Card>
      <h3 className="card-title text-warning flex justify-between">
        <Link to={CODE_SAMPLES.SWIPE_CARDS} className="flex items-center gap-2">
          <SmartphoneIcon className="size-4" />
          Swipe Cards
        </Link>

        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link to={CODE_SAMPLES.SWIPE_CARDS}>
        Componente de Swipe Cards feito utilizando <strong>ReactJS</strong>,{' '}
        <strong>TypeScript</strong>, <strong>TailwindCSS</strong> e{' '}
        <strong>Framer Motion</strong>, inspirado em aplicativos de
        relacionamento.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">Micro Frontend</span>
        <span className="badge badge-accent">React</span>
        <span className="badge badge-secondary">Framer Motion</span>
      </div>
    </Card>
  );
};
