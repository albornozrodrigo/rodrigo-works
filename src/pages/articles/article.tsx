import { ArrowLeftIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Divider } from '../../components/divider';
import { Seo } from '../../components/seo';
import { ROUTES } from '../../consts';
import {
  findArticle,
  formatArticleDate,
  loadArticleBody,
} from '../../data/articles';
import NotFound from '../not-found';
import { ArticleBody } from './markdown';

/**
 * O markdown vem em um chunk próprio, baixado só ao abrir o artigo.
 *
 * Carregamento explícito em vez de `use()` + Suspense: o estado de erro fica
 * declarado, e o comportamento é o mesmo em teste e em produção.
 */
const LazyArticleBody = ({ slug }: { slug: string }) => {
  const [state, setState] = useState<
    | { status: 'loading' }
    | { status: 'ready'; body: string }
    | { status: 'error' }
  >({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    loadArticleBody(slug)
      .then(body => {
        if (!cancelled) setState({ status: 'ready', body });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error' });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (state.status === 'loading') {
    return (
      <p className="text-base-content/60" role="status" aria-live="polite">
        Carregando o artigo…
      </p>
    );
  }

  if (state.status === 'error') {
    return (
      <div role="alert" className="alert alert-error">
        Não foi possível carregar o conteúdo deste artigo.
      </div>
    );
  }

  return <ArticleBody>{state.body}</ArticleBody>;
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = findArticle(slug);

  // Slug desconhecido cai no 404 em vez de renderizar uma página vazia.
  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="bg-linear-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <Seo
        title={article.title}
        description={article.description}
        path={`${ROUTES.ARTICLES}/${article.slug}`}
      />

      <article className="text-base-content container mx-auto max-w-3xl space-y-6 px-6">
        <Link
          to={ROUTES.ARTICLES}
          className="text-base-content/60 hover:text-secondary inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeftIcon className="size-4" aria-hidden="true" />
          Todas as publicações
        </Link>

        <h1 className="text-4xl font-bold">{article.title}</h1>

        <ul className="text-base-content/60 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <li className="flex items-center gap-1.5">
            <CalendarIcon className="size-3.5" aria-hidden="true" />
            <time dateTime={article.publishedAt}>
              {formatArticleDate(article.publishedAt)}
            </time>
          </li>
          <li className="flex items-center gap-1.5">
            <ClockIcon className="size-3.5" aria-hidden="true" />
            {article.readingTimeMinutes} min de leitura
          </li>
        </ul>

        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>

        <Divider margin />

        <div className="space-y-6">
          {/* `key` faz o React remontar ao trocar de artigo, resetando o
              estado de carregamento sem um setState dentro do effect. */}
          <LazyArticleBody key={article.slug} slug={article.slug} />
        </div>

        <Divider margin />

        <p className="text-base-content/60 text-sm">
          Publicado originalmente no{' '}
          <a
            href={article.canonicalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline underline-offset-4"
          >
            {article.source}
          </a>
          .
        </p>
      </article>
    </div>
  );
}
