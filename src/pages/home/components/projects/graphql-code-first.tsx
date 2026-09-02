import { DatabaseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const GraphqlApiCodeFirst = () => {
  return (
    <Card>
      <h3 className="card-title flex justify-between">
        <Link
          to={CODE_SAMPLES.GQL_API_CODE_FIRST}
          className="text-warning flex items-center gap-2"
        >
          <DatabaseIcon className="size-4" aria-hidden="true" />
          API GraphQL (Code First)
        </Link>
        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link to={CODE_SAMPLES.GQL_API_CODE_FIRST}>
        API em NestJS onde o schema GraphQL é gerado a partir dos decoradores
        TypeScript. Apollo, TypeORM e Postgres, com DataLoaders e leitura da AST
        da query contra N+1 e over-fetching, JWT com autorização por papéis e
        testes unitários.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NestJS</span>
        <span className="badge badge-secondary">GraphQL</span>
        <span className="badge badge-secondary">TypeORM</span>
        <span className="badge badge-accent">Postgres</span>
      </div>
    </Card>
  );
};
