import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ARTICLES, articlesByDate, findArticle } from '../../data/articles';
import ArticlePage from './article';
import Articles from './index';

const renderList = () =>
  render(
    <MemoryRouter>
      <Articles />
    </MemoryRouter>,
  );

const renderArticle = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/artigos/${slug}`]}>
      <Routes>
        <Route path="/artigos/:slug" element={<ArticlePage />} />
      </Routes>
    </MemoryRouter>,
  );

describe('dados das publicações', () => {
  it('ordena da mais recente para a mais antiga', () => {
    const dates = articlesByDate().map(article => article.publishedAt);

    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it('não tem slug duplicado', () => {
    const slugs = ARTICLES.map(article => article.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('carrega o markdown de cada artigo', () => {
    for (const article of ARTICLES) {
      expect(article.body.length).toBeGreaterThan(500);
    }
  });

  it('devolve undefined para slug desconhecido', () => {
    expect(findArticle('nao-existe')).toBeUndefined();
  });
});

describe('listagem de publicações', () => {
  it('lista todos os artigos com link para a página interna', () => {
    renderList();

    for (const article of ARTICLES) {
      expect(screen.getByRole('link', { name: article.title })).toHaveAttribute(
        'href',
        `/artigos/${article.slug}`,
      );
    }
  });

  it('aponta para a publicação original', () => {
    renderList();

    const links = screen.getAllByRole('link', { name: /Ver no dev.to/ });

    expect(links).toHaveLength(ARTICLES.length);
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('página do artigo', () => {
  it('renderiza título e conteúdo em markdown', () => {
    const [article] = articlesByDate();
    renderArticle(article.slug);

    expect(
      screen.getByRole('heading', { name: article.title, level: 1 }),
    ).toBeInTheDocument();
    // O markdown vira headings de verdade, não texto cru.
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThan(
      0,
    );
  });

  it('credita a publicação original', () => {
    const [article] = articlesByDate();
    renderArticle(article.slug);

    expect(screen.getByRole('link', { name: article.source })).toHaveAttribute(
      'href',
      article.canonicalUrl,
    );
  });

  it('cai no 404 quando o slug não existe', () => {
    renderArticle('slug-inventado');

    expect(
      screen.getByRole('heading', { name: 'Página não encontrada' }),
    ).toBeInTheDocument();
  });
});
