import { CloudIcon, LaptopIcon, ServerIcon, ToolCaseIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Animation } from '../../../../components/animation';
import { Card } from '../../../../components/card';
import { SectionTitle } from '../../../../components/section-title';

const skillsList = {
  frontend: [
    'TypeScript',
    'React',
    'Angular',
    'VueJS',
    // 'Svelte',

    'NextJS',
    'ViteJS',
    // 'NuxtJS',
    // 'Remix',
    // 'Astro',

    'Ionic',
    'React Native',
    'PWA',

    'SASS',
    'LESS',
    'Bootstrap',
    'TailwindCSS',
    'MaterialUI',
    'AntDesign',
    'DaisyUI',

    'Axios',
    'React Query',

    'Redux',
    'Zustand',
    'Hookstate',
    'Jotai',

    'Jest',
    // 'Storybook',
    // 'React Testing Library',
    // 'Playwright',
    // 'Vitest',

    'Zod',
  ],
  backend: [
    'Laravel (PHP)',
    'NestJS (NodeJS)',
    'MongoDB',
    'MySQL',
    'Redis',
    'Jest',
    'Swagger',
  ],
  devops: [
    'Docker',
    'AWS',
    'Firebase',
    'Linux',
    'Git',
    'Github',
    // 'Github Actions',
    'Gitlab',
  ],
  other: [
    'UX/UI',
    'SEO',
    'Performance',
    // 'Accessibility',
    // 'Web Vitals',
    'Microservices',
    // 'Microfrontends',
    'API Design',
  ],
};

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <span className="badge badge-outline skill-tag opacity-50 transition-all hover:opacity-90">
      {children}
    </span>
  );
};

export const Skills = () => {
  return (
    // bg-gradient-to-tl from-gray-950 via-indigo-950 to-gray-950
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Stack de Tecnologias" />

        <Animation y={50} once={true}>
          <Card>
            <h3 className="card-title">
              <LaptopIcon className="mr-1 size-4" />
              Frontend
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skillsList.frontend.map(skill => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        </Animation>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <Animation y={50} once={true} delay={0.1}>
            <Card>
              <h3 className="card-title">
                <ServerIcon className="mr-1 size-4" />
                Backend
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillsList.backend.map(skill => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </Animation>

          <Animation y={50} once={true} delay={0.2}>
            <Card>
              <h3 className="card-title">
                <CloudIcon className="mr-1 size-4" />
                DevOps & Cloud
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillsList.devops.map(skill => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </Animation>

          <Animation y={50} once={true} delay={0.3}>
            <Card>
              <h3 className="card-title">
                <ToolCaseIcon className="mr-1 size-4" />
                Outras Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillsList.other.map(skill => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </Animation>
        </div>
      </div>
    </section>
  );
};
