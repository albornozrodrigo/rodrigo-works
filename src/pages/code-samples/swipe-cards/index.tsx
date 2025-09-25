import { lazy, Suspense } from 'react';
import { users } from './data';

// @ts-expect-error import
const SwipeCards = lazy(() => import('swipe/swipe-cards'));

export default function SwipeCardsPage() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">Swipe Cards - ReactJS</h1>

          <p>
            Componente de Swipe Cards feito utilizando <strong>ReactJS</strong>,{' '}
            <strong>TypeScript</strong>, <strong>TailwindCSS</strong> e{' '}
            <strong>Framer Motion</strong>, inspirado em aplicativos de
            relacionamento.
          </p>

          <p>
            <strong>Link do projeto (Micro Frontend):</strong>{' '}
            <a
              href="https://swipe-cards-beryl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://swipe-cards-beryl.vercel.app/
            </a>
          </p>

          <p>
            <strong>Link do repositório no GitHub:</strong>{' '}
            <a
              href="https://github.com/albornozrodrigo/swipe-cards"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://github.com/albornozrodrigo/swipe-cards
            </a>
          </p>

          <div className="alert alert-success">
            <div>
              Este componente está sendo renderizado utilizando{' '}
              <strong>Micro Frontends</strong> com{' '}
              <strong>Module Federation.</strong>
            </div>
          </div>

          <Suspense fallback={'Loading...'}>
            <div className="mx-auto flex min-h-screen w-full items-center justify-center text-gray-500">
              <SwipeCards usersList={users} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
