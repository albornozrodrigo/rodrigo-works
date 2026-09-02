import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {
  ARTICLES,
  articlesByDate,
  findArticle,
  hasArticleBody,
  loadArticleBody,
} from '../../data/articles';
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

  it('tem um arquivo de markdown para cada entrada', async () => {
    for (const article of ARTICLES) {
      expect(hasArticleBody(article.slug)).toBe(true);
      await expect(loadArticleBody(article.slug)).resolves.toContain('##');
    }
  });

  it('memoiza a promise do corpo, para não refetchar a cada render', () => {
    const [article] = ARTICLES;

    expect(loadArticleBody(article.slug)).toBe(loadArticleBody(article.slug));
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
  it('renderiza título e conteúdo em markdown', async () => {
    const [article] = articlesByDate();
    renderArticle(article.slug);

    expect(
      screen.getByRole('heading', { name: article.title, level: 1 }),
    ).toBeInTheDocument();
    // O corpo chega por Suspense (import dinâmico + parse do markdown), então
    // o timeout padrão de 1s do findBy* fica no limite.
    expect(
      await screen.findAllByRole('heading', { level: 2 }, { timeout: 5000 }),
    ).not.toHaveLength(0);
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
