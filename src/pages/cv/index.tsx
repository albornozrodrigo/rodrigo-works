import { DownloadIcon, MailIcon, MapPinIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Divider } from '../../components/divider';
import { GithubIcon, LinkedinIcon } from '../../components/icons';
import { Seo } from '../../components/seo';
import { PROFILE } from '../../consts';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  LANGUAGES,
  SIDE_PROJECT,
  SKILLS,
  SUMMARY,
  experienceLabel,
} from '../../data/cv';
import './cv.css';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="cv-section space-y-6">
    <h2 className="border-primary/40 border-b pb-2 text-2xl font-bold">
      {title}
    </h2>
    {children}
  </section>
);

const SkillRow = ({
  label,
  skills,
}: {
  label: string;
  skills: readonly string[];
}) => (
  <div>
    <h3 className="mb-2 font-bold">{label}</h3>
    <p className="text-base-content/80 leading-relaxed">{skills.join(' • ')}</p>
  </div>
);

export default function Cv() {
  return (
    <div className="bg-linear-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <Seo
        title={`Currículo — ${PROFILE.fullName}`}
        description={`Currículo completo de ${PROFILE.fullName}, ${PROFILE.title}, com ${experienceLabel()} de experiência em React, Node.js e arquiteturas modernas.`}
        path="/cv"
      />

      <article className="text-base-content container mx-auto max-w-3xl space-y-10 px-6">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">{PROFILE.fullName}</h1>
          <p className="text-secondary text-lg font-semibold">
            {PROFILE.title}
          </p>

          <ul className="text-base-content/80 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li className="flex items-center gap-1.5">
              <MapPinIcon className="size-4" aria-hidden="true" />
              {PROFILE.location}
            </li>
            <li>
              <a
                className="hover:text-secondary flex items-center gap-1.5 underline-offset-4 hover:underline"
                href={`mailto:${PROFILE.email}`}
              >
                <MailIcon className="size-4" aria-hidden="true" />
                {PROFILE.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary flex items-center gap-1.5 underline-offset-4 hover:underline"
                href={PROFILE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                /albornozrodrigo
              </a>
            </li>
            <li>
              <a
                className="hover:text-secondary flex items-center gap-1.5 underline-offset-4 hover:underline"
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} aria-hidden="true" />
                /albornozrodrigo
              </a>
            </li>
          </ul>

          <p className="cv-no-print pt-2">
            <a
              href={PROFILE.resume}
              download
              className="btn btn-outline hover:btn-secondary btn-sm"
            >
              <DownloadIcon className="mr-1 size-3" aria-hidden="true" />
              Baixar em PDF
            </a>
          </p>
        </header>

        <Divider />

        <Section title="Resumo Profissional">
          <p className="leading-relaxed">{SUMMARY}</p>
        </Section>

        <Section title="Stack Tecnológico">
          <div className="space-y-4">
            <SkillRow label="Frontend" skills={SKILLS.frontend} />
            <SkillRow label="Backend" skills={SKILLS.backend} />
            <SkillRow label="DevOps & Cloud" skills={SKILLS.devops} />
            <SkillRow label="Testes & Qualidade" skills={SKILLS.testing} />
            <SkillRow label="Outras competências" skills={SKILLS.other} />
          </div>
        </Section>

        <Section title="Experiência Profissional">
          {EXPERIENCES.map(experience => (
            <div key={`${experience.company}-${experience.period}`}>
              <h3 className="text-xl font-bold">
                {experience.company}
                {experience.current && (
                  <span className="badge badge-success badge-sm ml-2 align-middle">
                    Atual
                  </span>
                )}
              </h3>
              <p className="text-secondary font-semibold">{experience.role}</p>
              <p className="text-base-content/60 mb-3 text-sm">
                {experience.period}
              </p>

              <p className="leading-relaxed">{experience.summary}</p>

              {experience.bullets && (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {experience.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {experience.highlights && (
                <div className="mt-4 space-y-4">
                  <h4 className="font-bold">Projetos de alto impacto</h4>
                  {experience.highlights.map(highlight => (
                    <div key={highlight.title} className="pl-4">
                      <p className="font-semibold">{highlight.title}</p>
                      <p className="leading-relaxed">{highlight.description}</p>
                      {highlight.caseUrl && (
                        <Link
                          to={highlight.caseUrl}
                          className="text-secondary text-sm underline-offset-4 hover:underline"
                        >
                          Ver descrição técnica do projeto →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-base-content/70 mt-4 text-sm">
                <span className="font-semibold">Tecnologias:</span>{' '}
                {experience.stack.join(' • ')}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Projeto Pessoal">
          <div>
            <h3 className="text-xl font-bold">{SIDE_PROJECT.name}</h3>
            <p className="text-secondary font-semibold">{SIDE_PROJECT.role}</p>
            <p className="text-base-content/60 mb-3 text-sm">
              {SIDE_PROJECT.period}
            </p>
            <p className="leading-relaxed">{SIDE_PROJECT.summary}</p>

            <div className="mt-4 space-y-4">
              {SIDE_PROJECT.versions.map(version => (
                <div key={version.title} className="pl-4">
                  <p className="font-semibold">{version.title}</p>
                  <ul className="list-disc space-y-1 pl-6">
                    {version.bullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {version.caseUrl && (
                    <Link
                      to={version.caseUrl}
                      className="text-secondary text-sm underline-offset-4 hover:underline"
                    >
                      Ver descrição técnica do projeto →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4">
              <span className="font-semibold">Reconhecimento:</span>{' '}
              {SIDE_PROJECT.recognition}
            </p>
            <p className="text-base-content/70 mt-2 text-sm">
              <span className="font-semibold">Stack atual:</span>{' '}
              {SIDE_PROJECT.stack.join(' • ')}
            </p>
          </div>
        </Section>

        <Section title="Formação Acadêmica">
          <ul className="space-y-3">
            {EDUCATION.map(item => (
              <li key={item.degree}>
                <p className="font-bold">{item.degree}</p>
                <p className="text-base-content/70 text-sm">
                  {item.school} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Cursos e Certificações">
          <ul className="list-disc space-y-1 pl-6">
            {CERTIFICATIONS.map(certification => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </Section>

        <Section title="Idiomas">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {LANGUAGES.map(language => (
              <li key={language.name}>
                <span className="font-semibold">{language.name}:</span>{' '}
                {language.level}
              </li>
            ))}
          </ul>
        </Section>
      </article>
    </div>
  );
}
