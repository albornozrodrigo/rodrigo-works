import { HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { PROJECTS } from '../../../../consts';

export const Loveg = () => {
  return (
    <Card>
      <h3 className="card-title flex justify-between">
        <Link
          to={PROJECTS.LOVEG}
          className="text-success flex items-center gap-2"
        >
          <HeartIcon className="size-4" aria-hidden="true" />
          Loveg - v1 / v2
        </Link>
        <span className="badge badge-success badge-xs">PROJETO PESSOAL</span>
      </h3>
      <Link to={PROJECTS.LOVEG}>
        Primeira plataforma brasileira de relacionamento focada em pessoas
        vegetarianas e veganas — produto tocado do zero, do back-end ao app
        Android, incluindo chat em tempo real com Socket.io + Redis. Rendeu
        matérias na Folha de S.Paulo, Catraca Livre e Revista dos Vegetarianos.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">AngularJS</span>
        <span className="badge badge-secondary">Laravel</span>
        <span className="badge badge-secondary">MySQL</span>
        <span className="badge badge-accent">WebSockets</span>
      </div>
    </Card>
  );
};
