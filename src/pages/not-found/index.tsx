import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/seo';
import { ROUTES } from '../../consts';

export default function NotFound() {
  return (
    <div className="bg-linear-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <Seo
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
        path="/404"
      />

      <div className="text-base-content container mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="gradient-text text-7xl font-bold">404</p>
        <h1 className="text-3xl font-bold">Página não encontrada</h1>
        <p className="text-base-content/70">
          O endereço que você acessou não existe ou foi movido.
        </p>
        <Link to={ROUTES.HOME} className="btn btn-outline hover:btn-secondary">
          <HomeIcon className="mr-1 size-4" aria-hidden="true" />
          Voltar para a home
        </Link>
      </div>
    </div>
  );
}
