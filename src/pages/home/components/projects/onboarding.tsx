import { StepForwardIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const Onboarding = () => {
  return (
    <Card>
      <h3 className="card-title text-warning flex justify-between">
        <Link to={CODE_SAMPLES.ONBOARDING} className="flex items-center gap-2">
          <StepForwardIcon className="size-4" aria-hidden="true" />
          Onboarding
        </Link>
        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link to={CODE_SAMPLES.ONBOARDING}>
        Fluxo de onboarding escrito em <strong>VueJS</strong>, empacotado como
        Custom Element e renderizado dentro deste host React. O caso mostra
        Module Federation cruzando frameworks: dois times poderiam escolher
        stacks diferentes e ainda assim entregar na mesma página.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">Micro Frontend</span>
        <span className="badge badge-accent">VueJS</span>
        <span className="badge badge-secondary">TailwindCSS</span>
      </div>
    </Card>
  );
};
