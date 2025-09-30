import { SmartphoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const Onboarding = () => {
  return (
    <Card>
      <h3 className="card-title text-warning flex justify-between">
        <Link to={CODE_SAMPLES.ONBOARDING} className="flex items-center gap-2">
          <SmartphoneIcon className="size-4" />
          Onboarding
        </Link>

        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link to={CODE_SAMPLES.ONBOARDING}>
        Componente de Onboarding feito utilizando <strong>VueJS</strong>,{' '}
        <strong>TypeScript</strong> e <strong>TailwindCSS</strong>.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">Micro Frontend</span>
        <span className="badge badge-accent">VueJS</span>
        <span className="badge badge-secondary">TailwindCSS</span>
      </div>
    </Card>
  );
};
