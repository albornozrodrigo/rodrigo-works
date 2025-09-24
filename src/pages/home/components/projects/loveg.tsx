import { HeartIcon } from 'lucide-react';
import { Card } from '../../../../components/card';

export const Loveg = () => {
  return (
    <Card>
      <h3 className="card-title flex justify-between">
        <a href="/loveg-v1-v2" className="flex items-center gap-2">
          <HeartIcon className="size-4" />
          Loveg - v1 / v2
        </a>
        <span className="badge badge-success badge-xs">PROJETO PESSOAL</span>
      </h3>
      <a href="/loveg-v1-v2">
        Primeira plataforma brasileira de relacionamento focada em pessoas
        vegetarianas e veganas. Reconhecida pela mídia nacional.
      </a>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">AngularJS</span>
        <span className="badge badge-secondary">Laravel</span>
        <span className="badge badge-secondary">MySQL</span>
        <span className="badge badge-accent">WebSockets</span>
      </div>
      {/* <div className="card-actions justify-between items-center mt-4">
          <div className="text-xs">
            <small>
              Mencionado em Folha de S.Paulo, Catraca Livre e Revista Super
              Interessante
            </small>
          </div>
        </div> */}
    </Card>
  );
};
