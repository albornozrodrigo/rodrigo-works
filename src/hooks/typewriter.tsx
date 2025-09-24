import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function useTypewriter({ text, speed = 100 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <>{displayedText}</>;
}
