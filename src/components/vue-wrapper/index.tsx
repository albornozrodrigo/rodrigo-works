import { useEffect, useState } from 'react';

/**
 * Ponte React → Vue.
 *
 * O micro frontend de onboarding é publicado pelo outro repositório como um
 * Custom Element (`defineCustomElement` do Vue). Aqui ele é carregado sob
 * demanda via Module Federation e registrado uma única vez no
 * `customElements`, o que permite renderizá-lo como uma tag comum no JSX.
 */
const VueWrapper = () => {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );

  useEffect(() => {
    let cancelled = false;

    // @ts-expect-error remote resolvido em runtime pelo Module Federation
    import('onboarding/app')
      .then(module => {
        if (cancelled) return;

        const VueOnboardingElement = module.default ?? module.VueOnboarding;

        if (!customElements.get('vue-onboarding')) {
          customElements.define('vue-onboarding', VueOnboardingElement);
        }

        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'loading') {
    return (
      <div role="status" aria-live="polite">
        <span className="loading loading-dots loading-lg text-primary" />
        <span className="sr-only">Carregando micro frontend…</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div role="alert" className="alert alert-error">
        Não foi possível carregar o micro frontend de onboarding.
      </div>
    );
  }

  return <vue-onboarding className="w-full" />;
};

export default VueWrapper;
