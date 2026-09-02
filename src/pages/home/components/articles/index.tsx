import { CalendarIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Animation } from '../../../../components/animation';
import { Card } from '../../../../components/card';
import { SectionTitle } from '../../../../components/section-title';
import { ROUTES } from '../../../../consts';
import { articlesByDate, formatArticleDate } from '../../../../data/articles';

export const Articles = () => {
  const articles = articlesByDate();

  return (
    <section id="articles" className="flex items-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Publicações" />

        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Animation
              key={article.slug}
              x={index % 2 === 0 ? -50 : 50}
              once={true}
            >
              <Card>
                <h3 className="card-title text-secondary">
                  <Link to={`${ROUTES.ARTICLES}/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <ul className="text-base-content/60 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <li className="flex items-center gap-1.5">
                    <CalendarIcon className="size-3.5" aria-hidden="true" />
                    <time dateTime={article.publishedAt}>
                      {formatArticleDate(article.publishedAt)}
                    </time>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <ClockIcon className="size-3.5" aria-hidden="true" />
                    {article.readingTimeMinutes} min
                  </li>
                </ul>

                <Link
                  to={`${ROUTES.ARTICLES}/${article.slug}`}
                  className="mt-2 leading-relaxed"
                >
                  {article.description}
                </Link>

                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="badge badge-outline badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Animation>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            to={ROUTES.ARTICLES}
            className="btn btn-outline hover:btn-secondary btn-sm"
          >
            Ver todas as publicações
          </Link>
        </p>
      </div>
    </section>
  );
};
