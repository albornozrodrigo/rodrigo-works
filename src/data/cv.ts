/**
 * Fonte única de verdade do currículo.
 *
 * O header, a seção "Sobre", a "Stack de Tecnologias" e a página /cv leem
 * daqui. Antes o mesmo conteúdo estava espalhado (e divergente) entre o PDF em
 * `public/`, os textos hardcoded nos componentes e o repositório
 * `albornozrodrigo/cv`. Para atualizar o currículo, edite este arquivo.
 */

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights?: { title: string; description: string; caseUrl?: string }[];
  bullets?: string[];
  stack: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

/** Anos de experiência, calculado a partir do primeiro emprego (2009). */
export const CAREER_START_YEAR = 2009;

export const yearsOfExperience = (now: Date = new Date()): number =>
  now.getFullYear() - CAREER_START_YEAR;

/** Arredonda para baixo na casa dos cinco: 17 anos → "mais de 15 anos". */
export const experienceLabel = (now: Date = new Date()): string =>
  `mais de ${Math.floor(yearsOfExperience(now) / 5) * 5} anos`;

export const SUMMARY = `Desenvolvedor Front-End / Full-Stack especializado em React, Node.js e
arquiteturas modernas. Expertise em aplicações de suporte a e-commerce e marketplaces de
larga escala, com foco em performance, UX/UI e sistemas distribuídos. Experiência desde
startups até grandes corporações, com proficiência em refatoração de sistemas legados e
criação de sistemas do zero.`;

export const EXPERIENCES: Experience[] = [
  {
    company: 'Sympla',
    role: 'Senior Front-End Developer',
    period: '2025 — atual',
    current: true,
    summary:
      'Desenvolvimento de produtos na maior plataforma de venda de ingressos e gestão de eventos do Brasil.',
    stack: ['TypeScript', 'React', 'NextJS', 'React Query', 'TailwindCSS'],
  },
  {
    company: 'americanas s.a.',
    role: 'Senior Front-End Developer',
    period: 'Out/2018 — Mai/2025 · 6 anos e 7 meses',
    summary:
      'Criação e ampliação de funcionalidades de projetos internos de suporte a aplicações de larga escala no varejo digital, com foco em performance e experiência do usuário. Passei por três equipes na empresa, atuando tanto no Front-End quanto no Back-End, e fui mentor técnico por duas vezes no programa de rotação de estágio — recebendo grupos de estagiários em uma abordagem "learning by doing", com code reviews periódicos e feedbacks estruturados.',
    highlights: [
      {
        title: 'Sistema de Gestão de Sellers (NextJS + NestJS)',
        description:
          'WebApp e API que gerenciam todos os sellers do marketplace e distribuem dados para diversas equipes da companhia via brokers Kafka. O sistema controlava endereço, dimensão de pacotes, entrega direto da loja, retirada em loja, entrega própria ou parceira, entre outras configurações por seller.',
        caseUrl: '/cases/store',
      },
      {
        title: 'Sistema de Autenticação Corporativa (NextJS + NestJS)',
        description:
          'WebApp e API que centralizavam o acesso aos sistemas da equipe, com cadastro de usuários, definição de roles e validação de login via LDAP.',
        caseUrl: '/cases/freight-login',
      },
      {
        title: 'Carteira Protegida — novo produto no PDV físico',
        description:
          'Novo tipo de seguro vendido diretamente no PDV das lojas físicas. O fluxo atravessava vários sistemas em Node e Java, com MySQL e MongoDB. Inclui um app em React Native rodando dentro das maquininhas da Cielo, responsável por realizar a venda na própria máquina de pagamento.',
        caseUrl: '/cases/app-broker',
      },
      {
        title: 'Modernização de legado: Java/JSP → NextJS/NestJS',
        description:
          'Reescrita de um monólito Java/JSP, separado em WebApp (NextJS) e API (NestJS). O sistema estimava o prazo de entrega de pedidos do e-commerce, tanto para produtos vendidos pela companhia (1P) quanto por sellers parceiros (3P).',
      },
    ],
    stack: [
      'React',
      'NextJS',
      'React Native',
      'React Query',
      'TailwindCSS',
      'TypeScript',
      'NestJS',
      'MySQL',
      'MongoDB',
      'Kafka',
      'Docker',
      'AWS',
      'Firebase',
    ],
  },
  {
    company: 'Apponte (HRTech Startup)',
    role: 'Full-Stack Developer',
    period: 'Fev/2018 — Set/2018',
    summary:
      'HRTech de matchmaking entre candidatos e vagas, com a proposta de ser um "Tinder de empregos". Fui responsável pela manutenção e evolução de uma API em Koa que centralizava o motor de recomendação e a autenticação, além da plataforma web em Angular e de um app híbrido em Ionic distribuído para Android e iOS, com push notifications em tempo real sobre novas oportunidades.',
    bullets: [
      'Otimização de queries do motor de recomendação',
      'Integrações com serviços de terceiros (e-mail e notificações)',
      'Implementação de testes automatizados',
      'Gerenciamento de instâncias EC2 na AWS, pipelines de deploy e escalabilidade',
    ],
    stack: [
      'Angular',
      'Ionic',
      'Node.js',
      'Koa',
      'PHP',
      'MongoDB',
      'Docker',
      'AWS',
    ],
  },
  {
    company: 'iCasei',
    role: 'Front-End Developer',
    period: 'Mar/2016 — Fev/2018',
    summary:
      'Uma das maiores plataformas de sites de casamento do Brasil. Participei de praticamente todos os projetos da companhia, com foco na renderização dos sites dos clientes — performance, SEO e experiência do usuário.',
    bullets: [
      'Manutenção e evolução dos sites de casamento (renderização dinâmica, templates customizáveis, responsividade)',
      'Desenvolvimento de landing pages e otimização de SEO orgânico',
      'Implementação de Google Tag Manager e ferramentas de tracking',
      'Manutenção de API em Ruby on Rails integrada a SQL Server',
      'Desenvolvimento do novo painel administrativo em AngularJS + Material Design',
      'Padronização de componentes, refatoração de legado e integração contínua com Docker',
    ],
    stack: [
      'AngularJS',
      'Ruby on Rails',
      'PHP',
      'SQL Server',
      'Docker',
      'SASS',
      'LESS',
      'Bootstrap',
      'Gulp',
    ],
  },
  {
    company: 'SEO Marketing · INFINITÀ multicom · AllSeven Propaganda',
    role: 'Web Developer / SEO Analyst / Web Designer',
    period: '2009 — 2015',
    summary:
      'Agências de publicidade, marketing digital e endomarketing, passando por funções de Web Designer, Desenvolvedor Web e Analista de SEO.',
    bullets: [
      'Websites institucionais e sistemas internos em PHP + MySQL, com foco em responsividade, usabilidade e SEO',
      'Conversão de layouts em front-end (HTML, CSS, JavaScript) e uso de preprocessadores',
      'E-mails marketing e landing pages focadas em performance e captação de leads',
      'SEO técnico: indexação, performance e posicionamento orgânico',
      'Atendimento a clientes de indústria, varejo e grandes corporações',
    ],
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'SEO'],
  },
];

export const SIDE_PROJECT = {
  name: 'Loveg',
  role: 'Founder & Lead Developer',
  period: 'Nov/2014 — Mai/2019 · retomado em 2025',
  summary:
    'Primeira plataforma brasileira de relacionamento focada em pessoas vegetarianas e veganas.',
  versions: [
    {
      title: 'V1 / V2 — AngularJS + Laravel',
      bullets: [
        'WebApp completa em AngularJS',
        'Aplicativo Android em Ionic',
        'Chat em tempo real com Socket.io + Redis',
        'Infraestrutura AWS escalável',
      ],
      caseUrl: '/projects/loveg-v1-v2',
    },
    {
      title: 'V3 — NextJS + NestJS (em desenvolvimento)',
      bullets: [
        'Reescrita completa com stack moderna',
        'PWA-first e server-first, com foco em performance',
        'Monorepo com Turborepo',
        'Internacionalização com next-intl',
        'Type-safe ponta a ponta via OpenAPI',
      ],
    },
  ],
  recognition:
    'Matérias na Folha de S.Paulo, Catraca Livre, Vista-se e Revista dos Vegetarianos.',
  stack: [
    'React',
    'NextJS',
    'NestJS',
    'MongoDB',
    'Firebase',
    'TailwindCSS',
    'DaisyUI',
    'Zustand',
    'Framer Motion',
  ],
};

export const EDUCATION: Education[] = [
  {
    degree: 'MBA em AI & Machine Learning',
    school: 'FIAP',
    period: '2021 — 2022',
  },
  {
    degree: 'Sistemas para Internet',
    school: 'FIAP',
    period: '2017 — 2018',
  },
  {
    degree: 'Técnico em Informática para Internet',
    school: 'ETEC-SP',
    period: '2012 — 2013',
  },
];

export const CERTIFICATIONS = [
  'GitHub Actions — ENAP (2025)',
  'UX Strategy — Mergo UX (2016)',
  'Laravel 5 + AngularJS — FullCycle (2015)',
  'Marketing Digital — Digitalks (2012)',
  'SEO — MestreSEO (2011)',
];

export const LANGUAGES = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
  { name: 'Espanhol', level: 'Intermediário' },
];

export const SKILLS = {
  frontend: [
    'TypeScript',
    'React',
    'NextJS',
    'Angular',
    'VueJS',
    'ViteJS',
    'React Native',
    'Ionic',
    'PWA',
    'React Query',
    'Axios',
    'Redux',
    'Zustand',
    'Jotai',
    'Hookstate',
    'TailwindCSS',
    'Tailwind Variants',
    'DaisyUI',
    'MaterialUI',
    'AntDesign',
    'Bootstrap',
    'SASS',
    'LESS',
    'PostCSS',
    'Zod',
    'Module Federation (Micro Frontends)',
  ],
  backend: [
    'Node.js',
    'NestJS',
    'Express',
    'GraphQL',
    'Apollo',
    'TypeORM',
    'Sequelize',
    'Laravel (PHP)',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Redis',
    'Kafka',
    'Swagger',
  ],
  devops: [
    'Docker',
    'AWS (S3, EC2, Route53, RDS, CloudFront)',
    'Firebase (Auth, Firestore, Storage)',
    'Linux',
    'Git',
    'GitHub Actions',
    'GitLab CI',
    'Vercel',
    'Turborepo',
  ],
  testing: [
    'Vitest',
    'Jest',
    'React Testing Library',
    'Playwright',
    'Snyk',
    'TDD',
  ],
  other: [
    'UX/UI',
    'SEO',
    'Web Performance',
    'Core Web Vitals',
    'Clean Code',
    'SOLID',
    'Domain Driven Design',
    'Micro Serviços',
    'API Design',
  ],
};
