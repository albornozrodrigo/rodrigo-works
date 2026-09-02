# rodrigo.works

Portfólio e currículo de [Rodrigo Albornoz](https://rodrigo-works.vercel.app/).
Além de vitrine, o projeto é o **host** dos micro frontends publicados em
repositórios separados e carregados em runtime via Module Federation.

## Stack

| Camada   | Tecnologia                                             |
| -------- | ------------------------------------------------------ |
| UI       | React 19 · TypeScript · React Router 7                 |
| Estilo   | TailwindCSS 4 · DaisyUI 5                              |
| Animação | Framer Motion                                          |
| Build    | Vite 8 (Rolldown) · `@originjs/vite-plugin-federation` |
| Testes   | Vitest · Testing Library · Playwright                  |
| Deploy   | Vercel via GitHub Actions                              |

## Micro frontends

Os cards de "code sample" não são cópias de código: são os builds de outros
repositórios, consumidos em tempo de execução.

| Remote       | Repositório                                                   | Stack |
| ------------ | ------------------------------------------------------------- | ----- |
| `swipe`      | [swipe-cards](https://github.com/albornozrodrigo/swipe-cards) | React |
| `onboarding` | [onboarding](https://github.com/albornozrodrigo/onboarding)   | VueJS |

Em desenvolvimento eles são lidos de `localhost:5001` e `localhost:5002`; em
produção, das URLs de deploy. Para rodar tudo localmente, suba os dois
repositórios nessas portas antes do `pnpm dev` — sem eles, apenas as páginas de
code sample ficam indisponíveis, o resto do site funciona normalmente.

## Rodando o projeto

Requer **Node 22+** e **pnpm 10+** (o `preinstall` bloqueia npm e yarn).

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

## Scripts

| Script               | O que faz                     |
| -------------------- | ----------------------------- |
| `pnpm dev`           | Dev server com HMR            |
| `pnpm build`         | Typecheck + build de produção |
| `pnpm preview`       | Serve o build local           |
| `pnpm typecheck`     | `tsc -b`, sem emitir          |
| `pnpm lint`          | ESLint                        |
| `pnpm format`        | Prettier em tudo              |
| `pnpm test`          | Testes unitários (Vitest)     |
| `pnpm test:watch`    | Vitest em watch               |
| `pnpm test:coverage` | Cobertura (v8)                |
| `pnpm test:e2e`      | Playwright                    |

## Estrutura

```
src/
├── components/    # UI compartilhada (card, navbar, footer, seo, icons…)
├── consts/        # rotas e dados de contato — fonte única de verdade
├── content/       # markdown dos artigos publicados
├── data/          # cv.ts e articles.ts — conteúdo, separado da apresentação
├── hooks/
├── pages/
│   ├── home/          # header, sobre, skills e os cards de projeto
│   ├── cv/            # currículo completo, imprimível como PDF
│   ├── articles/      # listagem e leitura das publicações
│   ├── cases-projects/# escrita técnica longa de cada case
│   └── code-samples/  # páginas que montam os micro frontends
└── interfaces/
```

### Publicando um artigo

1. Salve o markdown em `src/content/articles/<slug>.md`.
2. Acrescente uma entrada em [`src/data/articles.ts`](src/data/articles.ts) com
   título, descrição, data, tags e a URL da publicação original.

A rota `/artigos/<slug>`, a listagem, a seção da home e o SEO saem disso
automaticamente — só o `public/sitemap.xml` precisa da nova URL. O conteúdo fica
versionado aqui; o link para o dev.to é apenas a publicação original.

O corpo é renderizado por `react-markdown` + `remark-gfm` (tabelas, código),
com os componentes mapeados em
[`src/pages/articles/markdown.tsx`](src/pages/articles/markdown.tsx) para
manter a mesma tipografia das páginas de case. Esse parser vive num chunk
próprio, carregado só ao abrir um artigo.

### Atualizando o currículo

Todo o conteúdo do currículo vive em [`src/data/cv.ts`](src/data/cv.ts). Editar
esse arquivo atualiza de uma vez a seção "Sobre", a "Stack de Tecnologias", o
JSON-LD de SEO e a página `/cv`. A página `/cv` tem regras de `@media print`,
então "Imprimir → Salvar como PDF" no navegador gera o currículo em PDF já
formatado.

## SEO

Título, descrição, canonical e Open Graph são definidos por rota pelo
componente [`<Seo>`](src/components/seo/index.tsx), que usa o hoisting nativo de
`<title>`/`<meta>` do React 19 — sem `react-helmet`. A home também emite
JSON-LD `schema.org/Person`.

## Nota sobre TypeScript

O projeto está no **TypeScript 6**, e não no 7, porque o `typescript-eslint`
ainda roda sobre a API do TS 6
([typescript-eslint#10940](https://github.com/typescript-eslint/typescript-eslint/issues/10940)).
O build e o typecheck passam no TS 7; assim que o plugin suportar, basta subir a
versão em `package.json`.
