import { ChevronDownIcon, DownloadIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../../../../components/icons';
import { Terminal } from '../../../../components/terminal';
import { PROFILE, ROUTES } from '../../../../consts';
import { experienceLabel } from '../../../../data/cv';
import useTypewriter from '../../../../hooks/typewriter';
import { Profile } from '../../../../interfaces/interfaces';

export const Header = () => {
  const name = useTypewriter({ text: PROFILE.name });

  const profile: Profile = {
    name,
    email: PROFILE.email,
    hireable: false,
    company: 'Sympla',
    location: PROFILE.city,
    github: PROFILE.github,
    linkedIn: PROFILE.linkedIn,
    resume: PROFILE.resume,
    skills: [
      'TypeScript',
      'React',
      'NextJS',
      'NestJS',
      'React Query',
      'TailwindCSS',
      'Zustand',
      'MongoDB',
      'Docker',
    ],
  };

  return (
    <section className="hero hero-bg relative min-h-screen overflow-hidden bg-linear-to-tr from-violet-700 via-indigo-800 to-purple-700">
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="m-8 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
          <div className="max-w-sm text-center lg:text-left">
            <div className="flex w-full justify-center">
              <img
                src={`${PROFILE.github}.png`}
                width={140}
                height={140}
                fetchPriority="high"
                decoding="async"
                alt={`${PROFILE.title} - ${PROFILE.name}`}
                className="mx-auto size-[140px] rounded-full shadow-lg grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
              />
            </div>

            <nav
              className="mt-6 mb-2 flex justify-center gap-6 text-2xl"
              aria-label="Redes sociais"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no GitHub"
                className="hover:text-secondary transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href={PROFILE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no LinkedIn"
                className="hover:text-secondary transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Enviar e-mail"
                className="hover:text-secondary transition-colors"
              >
                <MailIcon />
              </a>
            </nav>

            <p className="my-4 text-center text-sm text-gray-300 lg:my-6 lg:text-base">
              Desenvolvedor Front-End / Full Stack com {experienceLabel()} de
              experiência, especializado em{' '}
              <strong className="text-secondary">React</strong>,{' '}
              <strong className="text-secondary">NodeJS</strong> e arquiteturas
              modernas.
            </p>

            <p className="flex flex-wrap justify-center gap-2">
              <Link
                to={ROUTES.CV}
                className="btn btn-outline hover:btn-secondary btn-sm"
              >
                Currículo completo
              </Link>
              <a
                href={PROFILE.resume}
                download
                className="btn btn-outline hover:btn-secondary btn-sm"
              >
                <DownloadIcon className="mr-1 size-3" /> PDF
              </a>
            </p>
          </div>

          <div>
            <Terminal profile={profile} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 flex flex-col items-center justify-center">
        {/* A seta pisca infinitamente; `motion-reduce` a congela para quem
            pediu menos movimento no sistema. */}
        <div className="transform animate-bounce motion-reduce:animate-none">
          <ChevronDownIcon
            className="text-white"
            size={24}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};
