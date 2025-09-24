import { SmartphoneIcon } from 'lucide-react';
import { Card } from '../../../../components/card';

export const AppBroker = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <a href="/app-broker" className="flex items-center gap-2">
          <SmartphoneIcon className="size-4" />
          App Broker
        </a>

        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <a href="/app-broker">
        O App Broker foi um aplicativo móvel desenvolvido em React Native e
        TypeScript, projetado especificamente para operar em máquinas de Ponto
        de Venda (POS) da Cielo.
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">React Native</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
