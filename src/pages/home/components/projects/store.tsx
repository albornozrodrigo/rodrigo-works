import { StoreIcon } from 'lucide-react';
import { Card } from '../../../../components/card';

export const Store = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <a href="/store-api" className="flex items-center gap-2">
          <StoreIcon className="size-4" />
          Sistema de Gestão de Sellers
        </a>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <a href="/store-api">
        Plataforma completa para gerenciamento de marketplace com configurações
        de entrega, dimensões, endereços de milhares de sellers.
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NextJS</span>
        <span className="badge badge-secondary">NestJS</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
