import { DatabaseIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../../../components/card';
import { CODE_SAMPLES } from '../../../../consts';

export const GraphqlApiSchemaFirst = () => {
  return (
    <Card>
      <h3 className="card-title flex justify-between">
        <Link
          rel="noreferrer noopener"
          to={CODE_SAMPLES.GQL_API_SCHEMA_FIRST}
          className="text-warning flex items-center gap-2"
        >
          <DatabaseIcon className="size-4" />
          API GraphQL (Schema First)
        </Link>
        <span className="badge badge-warning badge-xs">CODE SAMPLE</span>
      </h3>
      <Link rel="noreferrer noopener" to={CODE_SAMPLES.GQL_API_SCHEMA_FIRST}>
        API em NestJS com GraphQL (Schema First), Apollo, Sequelize, Postgres,
        Dataloaders, AST, JWT e testes automatizados.
      </Link>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge badge-primary">NestJS</span>
        <span className="badge badge-secondary">GraphQL</span>
        <span className="badge badge-secondary">Sequelize</span>
        <span className="badge badge-accent">Postgres</span>
      </div>
    </Card>
  );
};
