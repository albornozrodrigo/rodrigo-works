import { render, screen } from '@testing-library/react';
import { Animation } from './index';

/**
 * O framer-motion é mockado para que os props de animação virem atributos
 * inspecionáveis no DOM. Objetos precisam ser serializados na mão: o React 19
 * não converte mais objeto em atributo automaticamente — ele simplesmente
 * ignora o prop, que era o motivo de estes testes falharem.
 */
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      initial,
      whileInView,
      viewport,
      transition,
      ...props
    }: {
      children?: React.ReactNode;
      initial?: unknown;
      whileInView?: unknown;
      viewport?: unknown;
      transition?: unknown;
      className?: string;
    }) => (
      <div
        data-testid="motion-div"
        data-initial={JSON.stringify(initial)}
        data-while-in-view={JSON.stringify(whileInView)}
        data-viewport={JSON.stringify(viewport)}
        data-transition={JSON.stringify(transition)}
        {...props}
      >
        {children}
      </div>
    ),
  },
}));

describe('Animation', () => {
  it('should render the component correctly', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByTestId('motion-div')).toBeInTheDocument();
  });

  it('should apply the props correctly', () => {
    render(
      <Animation once={true} x={100} y={50}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-initial',
      '{"opacity":0,"x":100,"y":50}',
    );
  });

  it('should apply the whileInView prop correctly', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-while-in-view',
      '{"opacity":1,"y":0,"x":0}',
    );
  });

  it('should apply the viewport prop correctly', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-viewport',
      '{"once":true,"amount":0.25}',
    );
  });

  it('should apply the transition prop correctly', () => {
    render(
      <Animation once={true} delay={0.2}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-transition',
      '{"duration":0.5,"delay":0.2}',
    );
  });

  it('should apply the className when provided', () => {
    render(
      <Animation once={true} className="test-class">
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveClass('test-class');
  });

  it('should omit x and y when not provided', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    // JSON.stringify remove chaves com valor `undefined`.
    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-initial',
      '{"opacity":0}',
    );
  });

  it('should use the default delay when delay is not provided', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-transition',
      '{"duration":0.5}',
    );
  });

  it('should render the children correctly', () => {
    render(
      <Animation once={true}>
        <div data-testid="child">Children content</div>
      </Animation>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Children content')).toBeInTheDocument();
  });

  it('should work with once=false', () => {
    render(
      <Animation once={false}>
        <div>Teste</div>
      </Animation>,
    );

    expect(screen.getByTestId('motion-div')).toHaveAttribute(
      'data-viewport',
      '{"once":false,"amount":0.25}',
    );
  });

  it('should accept multiple children', () => {
    render(
      <Animation once={true}>
        <div>Primeiro filho</div>
        <div>Segundo filho</div>
        <span>Terceiro filho</span>
      </Animation>,
    );

    expect(screen.getByText('Primeiro filho')).toBeInTheDocument();
    expect(screen.getByText('Segundo filho')).toBeInTheDocument();
    expect(screen.getByText('Terceiro filho')).toBeInTheDocument();
  });
});
