import { CalendarIcon, ClockIcon, ExternalLinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/card';
import { Seo } from '../../components/seo';
import { ROUTES } from '../../consts';
import { articlesByDate, formatArticleDate } from '../../data/articles';

export default function Articles() {
  const articles = articlesByDate();

  return (
    <div className="bg-linear-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <Seo
        title="Publicações"
        description="Artigos sobre arquitetura de front-end, micro frontends, resiliência e decisões de engenharia."
        path={ROUTES.ARTICLES}
      />

      <div className="text-base-content container mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-bold">Publicações</h1>
        <p className="text-base-content/70 mb-12">
          Artigos sobre arquitetura de front-end, micro frontends, resiliência e
          as decisões de engenharia por trás delas.
        </p>

        <div className="space-y-8">
          {articles.map(article => (
            <Card key={article.slug}>
              <h2 className="card-title text-secondary">
                <Link to={`${ROUTES.ARTICLES}/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

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

              <p className="mt-2 leading-relaxed">{article.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="badge badge-outline badge-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                <Link
                  to={`${ROUTES.ARTICLES}/${article.slug}`}
                  className="text-secondary underline-offset-4 hover:underline"
                >
                  Ler o artigo →
                </Link>
                <a
                  href={article.canonicalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-content/60 hover:text-secondary flex items-center gap-1.5"
                >
                  <ExternalLinkIcon className="size-3.5" aria-hidden="true" />
                  Ver no {article.source}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
