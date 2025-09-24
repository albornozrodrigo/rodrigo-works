import { LogInIcon } from 'lucide-react';
import { Card } from '../../../../components/card';

export const FreightLogin = () => {
  return (
    <Card>
      <h3 className="card-title text-secondary flex justify-between">
        <a href="/freight-login" className="flex items-center gap-2">
          <LogInIcon className="size-4" />
          Sistema de Autenticação
        </a>
        <span className="badge badge-secondary badge-xs">CASE</span>
      </h3>
      <a href="/freight-login">
        Sistema de login unificado em plataforma para autenticação e controle de
        usuários e aplicações da equipe.
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NextJS</span>
        <span className="badge badge-secondary">NestJS</span>
        <span className="badge badge-accent">TypeScript</span>
      </div>
    </Card>
  );
};
