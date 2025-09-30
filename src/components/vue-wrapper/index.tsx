import React, { useEffect, useState } from 'react';

const VueWrapper: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // @ts-expect-error custom element
    import('onboarding/app').then(m => {
      const VueOnboardingElement = m.default || m.VueOnboarding;

      if (!customElements.get('vue-onboarding')) {
        customElements.define('vue-onboarding', VueOnboardingElement);
      }

      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  // @ts-expect-error import
  return <vue-onboarding />;
};

export default VueWrapper;
