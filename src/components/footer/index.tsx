import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://github.com/albornozrodrigo/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/albornozrodrigo/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:rodrigo.albornoz.f@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <MailIcon />
          </a>
        </div>
        <p className="font-bold text-lg gradient-text">
          Rodrigo Albornoz Figueiredo
        </p>
        <p>Senior Front-End Developer | Full-Stack Developer</p>
        <p>São Paulo, SP - Brasil</p>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} - Desenvolvido com ❤️ usando TailwindCSS
          + DaisyUI
        </p>
      </div>
    </footer>
  );
};
