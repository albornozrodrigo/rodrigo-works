import { PROFILE, SITE_URL } from '../../consts';

interface SeoProps {
  /** Título da aba/SERP. O nome do site é acrescentado automaticamente. */
  title: string;
  description: string;
  /** Caminho da rota, começando com "/". Usado no canonical e no og:url. */
  path: string;
  /** `article` para páginas de case, `profile` para a home/CV. */
  type?: 'website' | 'article' | 'profile';
}

/**
 * SEO por rota sem dependências extras.
 *
 * O React 19 iça `<title>`, `<meta>` e `<link rel="canonical">` renderizados em
 * qualquer ponto da árvore para dentro do `<head>`, e deduplica por `name`/
 * `property`, então o `index.html` fica só com os defaults e cada página
 * sobrescreve o que precisa.
 */
export const Seo = ({
  title,
  description,
  path,
  type = 'article',
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(PROFILE.name)
    ? title
    : `${title} — ${PROFILE.name}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
