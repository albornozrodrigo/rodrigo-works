/**
 * Publicações.
 *
 * Para adicionar um artigo: salve o markdown em `src/content/articles/<slug>.md`
 * e acrescente uma entrada em ARTICLES. O conteúdo fica versionado no
 * repositório — o link para o dev.to é apenas a publicação original.
 *
 * Os metadados e o corpo vivem separados de propósito. A home e a listagem só
 * precisam de título, data e descrição; carregar o markdown junto colocaria o
 * texto integral de todos os artigos no bundle inicial.
 */
export interface Article {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601. */
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  /** Onde o artigo foi publicado originalmente. */
  canonicalUrl: string;
  source: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'frugal-cascade',
    title:
      'Frugal Cascade: um padrão de resiliência para arquiteturas com orçamento zero',
    description:
      'Projetos pessoais e MVPs raramente nascem com verba. Este artigo formaliza um padrão que encadeia provedores gratuitos em uma cascata de fallbacks, com degradação controlada até um last resort garantido.',
    publishedAt: '2026-05-11',
    readingTimeMinutes: 6,
    tags: ['Arquitetura', 'Infraestrutura', 'System Design', 'Side Projects'],
    canonicalUrl:
      'https://dev.to/albornozrodrigo/frugal-cascade-um-padrao-de-resiliencia-para-arquiteturas-com-orcamento-zero-cpa',
    source: 'dev.to',
  },
  {
    slug: 'module-federation-nextjs',
    title:
      'A Treta do Module Federation e Next.js: uma história de falta de colaboração',
    description:
      'Por que não existe suporte oficial do Next.js ao Module Federation: o atrito entre a filosofia build-time da Vercel e o carregamento em runtime, e o que isso significa para quem escolhe micro frontends hoje.',
    publishedAt: '2025-11-06',
    readingTimeMinutes: 3,
    tags: ['React', 'Next.js', 'Micro Frontends', 'Open Source'],
    canonicalUrl:
      'https://dev.to/albornozrodrigo/a-treta-do-module-federation-e-nextjs-uma-historia-de-falta-de-colaboracao-12dk',
    source: 'dev.to',
  },
];

/**
 * Um chunk por arquivo de markdown, buscado só quando o artigo é aberto.
 * O `import.meta.glob` resolve os caminhos em tempo de build, então um .md que
 * não esteja em ARTICLES simplesmente nunca é baixado.
 */
const bodies = import.meta.glob<string>('../content/articles/*.md', {
  query: '?raw',
  import: 'default',
});

const cache = new Map<string, Promise<string>>();

/**
 * O React chama isto durante o render via `use()`, que re-executa a função a
 * cada tentativa — por isso a promise precisa ser memoizada, senão cada render
 * dispara um fetch novo e a Suspense nunca resolve.
 */
export const loadArticleBody = (slug: string): Promise<string> => {
  const cached = cache.get(slug);
  if (cached) return cached;

  const load = bodies[`../content/articles/${slug}.md`];
  const promise = load
    ? load()
    : Promise.reject(new Error(`Artigo não encontrado: ${slug}`));

  cache.set(slug, promise);
  return promise;
};

export const hasArticleBody = (slug: string): boolean =>
  `../content/articles/${slug}.md` in bodies;

/** Mais recentes primeiro. */
export const articlesByDate = (): Article[] =>
  [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const findArticle = (slug?: string): Article | undefined =>
  ARTICLES.find(article => article.slug === slug);

export const formatArticleDate = (isoDate: string): string =>
  new Date(`${isoDate}T12:00:00Z`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
