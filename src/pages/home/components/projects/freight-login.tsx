import { LogInIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CASES } from '../../../../consts';

export const FreightLogin = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <Link to={CASES.FREIGHT_LOGIN} className="flex items-center gap-2">
          <LogInIcon className="size-4" />
          Sistema de Autenticação
        </Link>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <Link to={CASES.FREIGHT_LOGIN}>
        Sistema de login unificado em plataforma para autenticação e controle de
        usuários e aplicações da equipe.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NextJS</span>
        <span className="badge badge-secondary">NestJS</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
