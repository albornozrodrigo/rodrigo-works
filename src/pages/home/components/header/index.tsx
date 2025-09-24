import { ChevronDownIcon } from 'lucide-react';
import { Terminal } from '../../../../components/terminal';
import useTypewriter from '../../../../hooks/typewriter';
import { Profile } from '../../../../interfaces/interfaces';

export const Header = () => {
  const name = useTypewriter({ text: 'Rodrigo Albornoz' });
  const description = useTypewriter({
    text: '15 anos de experiência em desenvolvimento Full-Stack, especializado em React, Node.js e arquiteturas modernas.',
    speed: 25,
  });

  const profile: Profile = {
    name,
    description,
    hireable: true,
    company: null,
    location: 'São Paulo',
    github: 'https://github.com/albornozrodrigo',
    linkedIn: 'https://www.linkedin.com/in/albornozrodrigo/',
    resume:
      'https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing',
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
                alt={''}
                className="mx-auto cursor-pointer rounded-full grayscale transition-all duration-1000 hover:scale-110 hover:grayscale-0"
              />
            </div>

            <p className="my-4 text-center text-sm text-gray-300 lg:my-6 lg:text-base">
              {description}
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
