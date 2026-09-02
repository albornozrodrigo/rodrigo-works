import { LogInIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CASES } from '../../../../consts';

export const FreightLogin = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <Link to={CASES.FREIGHT_LOGIN} className="flex items-center gap-2">
          <LogInIcon className="size-4" aria-hidden="true" />
          Sistema de Autenticação
        </Link>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <Link to={CASES.FREIGHT_LOGIN}>
        Login corporativo unificado para todas as aplicações da equipe:
        autenticação via LDAP, cadastro de usuários e um modelo de papéis e
        permissões que cada sistema passou a consumir em vez de reimplementar o
        seu próprio controle de acesso.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NextJS</span>
        <span className="badge badge-secondary">NestJS</span>
        <span className="badge badge-secondary">LDAP</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
