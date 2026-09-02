import { SmartphoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CASES } from '../../../../consts';

export const AppBroker = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <Link to={CASES.APP_BROKER} className="flex items-center gap-2">
          <SmartphoneIcon className="size-4" aria-hidden="true" />
          App Broker
        </Link>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <Link to={CASES.APP_BROKER}>
        App em React Native rodando dentro das maquininhas de cartão (POS) da
        Cielo, para venda de seguros e garantia estendida no balcão da loja
        física. Integra o hardware do aparelho — leitura de código de
        barras/IMEI, captura de assinatura e impressão do comprovante — no mesmo
        fluxo da venda.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">React Native</span>
        <span className="badge badge-secondary">POS / Cielo</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
