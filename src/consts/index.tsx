export const CASES = {
  STORE: '/cases/store',
  APP_BROKER: '/cases/app-broker',
  FREIGHT_LOGIN: '/cases/freight-login',
};

export const PROJECTS = {
  LOVEG: '/projects/loveg-v1-v2',
};

export const CODE_SAMPLES = {
  SWIPE_CARDS: '/code-samples/swipe-cards',
  ONBOARDING: '/code-samples/onboarding',
  GQL_API_SCHEMA_FIRST: '/code-samples/graphql-api-schema-first',
  GQL_API_CODE_FIRST: '/code-samples/graphql-api-code-first',
};

export const ROUTES = {
  HOME: '/',
  CV: '/cv',
  ARTICLES: '/artigos',
};

export const SITE_URL = 'https://rodrigo-works.vercel.app';

/**
 * Fonte única de verdade para os dados de contato/identidade.
 * Antes estavam duplicados entre header, footer e o CV em PDF, o que já tinha
 * gerado divergência entre as páginas.
 */
export const PROFILE = {
  firstName: 'Rodrigo',
  name: 'Rodrigo Albornoz',
  fullName: 'Rodrigo Albornoz Figueiredo',
  title: 'Senior Front-End Developer | Full-Stack Developer',
  location: 'São Paulo, SP - Brasil',
  city: 'São Paulo',
  email: 'rodrigo.albornoz.f@gmail.com',
  github: 'https://github.com/albornozrodrigo',
  linkedIn: 'https://www.linkedin.com/in/albornozrodrigo/',
  resume: '/rodrigo-albornoz.pdf',
} as const;
