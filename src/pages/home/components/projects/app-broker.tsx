import { SmartphoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CASES } from '../../../../consts';

export const AppBroker = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <Link to={CASES.APP_BROKER} className="flex items-center gap-2">
          <SmartphoneIcon className="size-4" />
          App Broker
        </Link>

        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <Link to={CASES.APP_BROKER}>
        O App Broker foi um aplicativo móvel desenvolvido em React Native e
        TypeScript, projetado especificamente para operar em máquinas de Ponto
        de Venda (POS) da Cielo.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">React Native</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
