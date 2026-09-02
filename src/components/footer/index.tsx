import { MailIcon } from 'lucide-react';
import { PROFILE } from '../../consts';
import { GithubIcon, LinkedinIcon } from '../icons';

export const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-10">
      <div>
        <nav
          className="grid grid-flow-col gap-4 text-2xl"
          aria-label="Redes sociais"
        >
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
            className="hover:text-primary transition-colors"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href={PROFILE.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Enviar e-mail"
            className="hover:text-primary transition-colors"
          >
            <MailIcon />
          </a>
        </nav>
        <p className="gradient-text text-lg font-bold">{PROFILE.fullName}</p>
        <p>{PROFILE.title}</p>
        <p>{PROFILE.location}</p>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} - Desenvolvido com ❤️ usando React,
          TailwindCSS + DaisyUI
        </p>
      </div>
    </footer>
  );
};
