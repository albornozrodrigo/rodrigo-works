import {
  ChevronDownIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from 'lucide-react';
import { Terminal } from '../../../../components/terminal';
import useTypewriter from '../../../../hooks/typewriter';
import { Profile } from '../../../../interfaces/interfaces';

export const Header = () => {
  const name = useTypewriter({ text: 'Rodrigo Albornoz' });

  const profile: Profile = {
    name,
    email: 'rodrigo.albornoz.f@gmail.com',
    hireable: true,
    company: null,
    location: 'São Paulo',
    github: 'https://github.com/albornozrodrigo',
    linkedIn: 'https://www.linkedin.com/in/albornozrodrigo/',
    resume: '',
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
    <section className="hero hero-bg relative min-h-screen overflow-hidden bg-gradient-to-tr from-violet-700 via-indigo-800 to-purple-700">
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="m-8 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
          <div className="max-w-sm text-center lg:text-left">
            <div className="flex w-full justify-center">
              <img
                src={`${profile.github}.png`}
                width={140}
                height={140}
                alt={'Desenvolvedor Front-End | Full Stack -  Rodrigo Albornoz'}
                className="mx-auto cursor-pointer rounded-full shadow-lg grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
              />
            </div>

            <div className="mt-6 mb-2 flex justify-center gap-6 text-2xl">
              <a
                href={profile.github}
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedIn}
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                className="hover:text-secondary transition-colors"
              >
                <MailIcon />
              </a>
            </div>

            <p className="my-4 text-center text-sm text-gray-300 lg:my-6 lg:text-base">
              Desenvolvedor Front-End / Full Stack com 15 anos de experiência,
              especializado em <strong className="text-secondary">React</strong>
              , <strong className="text-secondary">NodeJS</strong> e
              arquiteturas modernas.
            </p>

            <p className="text-center">
              <a
                href="/rodrigo-albornoz.pdf"
                download="rodrigo-albornoz.pdf"
                target="_blank"
                className="btn btn-outline hover:btn-secondary btn-sm"
              >
                <DownloadIcon className="mr-1 size-3" /> Currículo
              </a>
            </p>
          </div>

          <div>
            <Terminal profile={profile} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 flex flex-col items-center justify-center">
        <div className="transform animate-bounce">
          <ChevronDownIcon className="text-white" size={24} />
        </div>
      </div>
    </section>
  );
};
