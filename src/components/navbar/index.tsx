import { MoonIcon, SunIcon } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 z-50 bg-transparent text-white shadow-sm">
      <div className="flex-1">
        <a href="/" className="ml-2 text-xl">{`<rodrigo.works>`}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <label className="swap swap-rotate rounded-full">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <SunIcon className="swap-off size-6 fill-current" />

              {/* moon icon */}
              <MoonIcon className="swap-on size-6 fill-current" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
