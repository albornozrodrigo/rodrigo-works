import { StoreIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CASES } from '../../../../consts';

export const Store = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <Link to={CASES.STORE} className="flex items-center gap-2">
          <StoreIcon className="size-4" aria-hidden="true" />
          Sistema de Gestão de Sellers
        </Link>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <Link to={CASES.STORE}>
        Painel e API que centralizavam a configuração logística de todos os
        sellers de um marketplace de grande porte — endereços, dimensões de
        pacote, entrega direto da loja, retirada em loja e frete próprio ou
        parceiro — e distribuíam esses dados para as demais equipes da companhia
        via brokers Kafka.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NextJS</span>
        <span className="badge badge-secondary">NestJS</span>
        <span className="badge badge-secondary">Kafka</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
