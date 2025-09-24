import { MoonIcon, SunIcon } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="navbar bg-transparent text-white shadow-sm absolute top-0 left-0">
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
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
