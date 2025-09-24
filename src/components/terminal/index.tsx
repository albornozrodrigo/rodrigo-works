import { Profile } from '../../interfaces/interfaces';

interface TerminalInterface {
  profile: Profile;
}

export const Terminal = ({ profile }: TerminalInterface) => {
  return (
    <div className="relative max-w-md rounded-lg border border-indigo-500 bg-gradient-to-r from-indigo-950 to-indigo-950 text-left">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 py-5 lg:px-6">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-400">const</span>
            <span className="mr-2 text-violet-400">coder</span>
            <span className="mr-2 text-pink-400">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-green-400">{profile.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">company:</span>
            {profile.company && <span className="text-gray-400">{`'`}</span>}
            <span className="text-green-400">{profile.company ?? 'null'}</span>
            {profile.company && <span className="text-gray-400">{`',`}</span>}
            {!profile.company && <span className="text-gray-400">{`,`}</span>}
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">location:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-green-400">{profile.location}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="mr-2 ml-4 lg:ml-8">
            <span className="text-white">skills:</span>
            <span className="text-gray-400">{`['`}</span>
            {profile.skills.map((skill, i) => (
              <>
                <span className="text-cyan-400">{skill}</span>
                {i !== profile.skills.length - 1 && (
                  <span className="text-gray-400">{"', '"}</span>
                )}
              </>
            ))}
            <span className="text-gray-400">{"'],"}</span>
          </div>
          <div>
            <span className="mr-2 ml-4 text-white lg:ml-8">hireable:</span>
            <span className="text-orange-400">
              {profile?.hireable.toString()}
            </span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
};
