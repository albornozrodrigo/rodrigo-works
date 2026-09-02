import {
  CloudIcon,
  FlaskConicalIcon,
  LaptopIcon,
  ServerIcon,
  ToolCaseIcon,
} from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Animation } from '../../../../components/animation';
import { Card } from '../../../../components/card';
import { SectionTitle } from '../../../../components/section-title';
import { SKILLS } from '../../../../data/cv';

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <span className="badge badge-outline skill-tag hover:badge-secondary opacity-50 transition-all hover:opacity-90">
      {children}
    </span>
  );
};

const SkillGroup = ({
  title,
  icon: Icon,
  skills,
}: {
  title: string;
  icon: typeof LaptopIcon;
  skills: readonly string[];
}) => (
  <Card>
    <h3 className="card-title">
      <Icon className="mr-1 size-4" aria-hidden="true" />
      {title}
    </h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map(skill => (
        <Badge key={skill}>{skill}</Badge>
      ))}
    </div>
  </Card>
);

export const Skills = () => {
  return (
    <section id="skills" className="flex min-h-screen items-center py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <SectionTitle title="Stack de Tecnologias" />

        <Animation y={50} once={true}>
          <SkillGroup
            title="Frontend"
            icon={LaptopIcon}
            skills={SKILLS.frontend}
          />
        </Animation>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Animation y={50} once={true} delay={0.1}>
            <SkillGroup
              title="Backend"
              icon={ServerIcon}
              skills={SKILLS.backend}
            />
          </Animation>

          <Animation y={50} once={true} delay={0.2}>
            <SkillGroup
              title="DevOps & Cloud"
              icon={CloudIcon}
              skills={SKILLS.devops}
            />
          </Animation>

          <Animation y={50} once={true} delay={0.3}>
            <SkillGroup
              title="Testes & Qualidade"
              icon={FlaskConicalIcon}
              skills={SKILLS.testing}
            />
          </Animation>

          <Animation y={50} once={true} delay={0.4}>
            <SkillGroup
              title="Outras Skills"
              icon={ToolCaseIcon}
              skills={SKILLS.other}
            />
          </Animation>
        </div>
      </div>
    </section>
  );
};
