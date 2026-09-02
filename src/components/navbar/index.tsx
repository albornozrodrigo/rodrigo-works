import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../consts';

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === ROUTES.HOME;

  return (
    <header className="navbar absolute top-0 left-0 z-50 bg-transparent text-white">
      <div className="flex-1">
        <Link
          to={ROUTES.HOME}
          className="hover:text-secondary ml-2 text-sm transition-all duration-300"
        >{`<rodrigo.works>`}</Link>
      </div>

      <nav className="flex-none" aria-label="Navegação principal">
        <ul className="menu menu-horizontal gap-1 px-1 text-sm">
          {isHome && (
            <>
              <li className="hidden sm:block">
                <a href="#about" className="hover:text-secondary">
                  Sobre
                </a>
              </li>
              <li className="hidden sm:block">
                <a href="#skills" className="hover:text-secondary">
                  Stack
                </a>
              </li>
              <li className="hidden sm:block">
                <a href="#projects" className="hover:text-secondary">
                  Projetos
                </a>
              </li>
            </>
          )}
          <li>
            <Link to={ROUTES.CV} className="hover:text-secondary">
              Currículo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
