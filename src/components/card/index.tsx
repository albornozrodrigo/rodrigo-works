import { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card card-hover h-full border border-indigo-500 bg-gradient-to-r from-indigo-950 to-indigo-950 shadow-xl">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};
