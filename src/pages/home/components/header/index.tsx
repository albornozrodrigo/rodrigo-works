import { ChevronDownIcon } from 'lucide-react';
import { Navbar } from '../../../../components/navbar';
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
    <section className="hero hero-bg bg-gradient-to-tr from-violet-700 via-indigo-800 to-purple-700 min-h-screen relative overflow-hidden">
      <Navbar />

      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-8 m-8">
          <div className="text-center lg:text-left max-w-sm">
            <div className="flex w-full justify-center">
              <img
                src={'/src/assets/images/me.webp'}
                width={140}
                height={140}
                alt={''}
                className="mx-auto rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              />
            </div>

            <p className="text-gray-300 text-sm lg:text-base my-4 lg:my-6 text-center">
              {description}
            </p>
          </div>

          <div>
            <Terminal profile={profile} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 flex items-center justify-center flex-col">
        <div className="transform animate-bounce">
          <ChevronDownIcon className="text-white" size={24} />
        </div>
      </div>
    </section>
  );
};
