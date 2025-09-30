import { Suspense } from 'react';
import Onboarding from '../../../components/vue-wrapper';

export default function SwipeCardsPage() {
  return (
    <div className="bg-gradient-to-br py-20 dark:from-indigo-950 dark:via-neutral-950 dark:to-indigo-950">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-base-content min-h-screen space-y-6">
          <h1 className="mb-8 text-4xl font-bold">Onboarding - VueJS</h1>

          <p>
            Componente de Onboarding feito utilizando <strong>VueJS</strong>,{' '}
            <strong>TypeScript</strong> e <strong>TailwindCSS</strong>.
          </p>

          <p>
            <strong>Link do projeto (Micro Frontend):</strong>{' '}
            <a
              href="onboarding-flame-pi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://onboarding-flame-pi.vercel.app/
            </a>
          </p>

          <p>
            <strong>Link do repositório no GitHub:</strong>{' '}
            <a
              href="https://github.com/albornozrodrigo/onboarding"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://github.com/albornozrodrigo/onboarding
            </a>
          </p>

          <div className="alert alert-success">
            <div>
              Este componente está sendo renderizado como um{' '}
              <strong>Micro Frontend</strong> utilizando{' '}
              <strong>Module Federation</strong>.
            </div>
          </div>

          <Suspense fallback={'Loading...'}>
            <div className="mx-auto flex min-h-screen w-full items-center justify-center text-gray-500">
              <Onboarding />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
