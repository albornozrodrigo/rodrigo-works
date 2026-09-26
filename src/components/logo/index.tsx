import mark from '../../assets/logo/rw-mark.svg?raw';
import wordmark from '../../assets/logo/rw-wordmark-on-dark.svg?raw';

const SOURCES = { mark, wordmark } as const;

interface LogoProps {
  /** `wordmark` = `<rodrigo.works/>`; `mark` = `<r/>` no tile (mínimo 24px). */
  variant?: keyof typeof SOURCES;
  /** Altura em px; a largura segue a proporção do arquivo. */
  size?: number;
  className?: string;
}

/**
 * Logotipo do design system. O SVG entra inline (texto já convertido em
 * contornos) para não custar uma requisição nem deslocar o layout da navbar.
 * É decorativo: quem o envolve (um link, por exemplo) dá o nome acessível.
 */
export const Logo = ({
  variant = 'wordmark',
  size = 18,
  className,
}: LogoProps) => (
  <span
    aria-hidden="true"
    className={`inline-block [&>svg]:h-full [&>svg]:w-auto ${className ?? ''}`}
    style={{ height: size }}
    dangerouslySetInnerHTML={{ __html: SOURCES[variant] }}
  />
);
