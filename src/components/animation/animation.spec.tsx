import { render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Animation } from './index';

// Mock do framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: PropsWithChildren) => (
      <div data-testid="motion-div" {...props}>
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

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'initial',
      '{"opacity":0,"x":100,"y":50}',
    );
  });

  it('should apply the whileInView prop correctly', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'whileInView',
      '{"opacity":1,"y":0,"x":0}',
    );
  });

  it('should apply the viewport prop correctly', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'viewport',
      '{"once":true,"amount":0.25}',
    );
  });

  it('should apply the transition prop correctly', () => {
    render(
      <Animation once={true} delay={0.2}>
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'transition',
      '{"duration":0.5,"delay":0.2}',
    );
  });

  it('should apply the className when provided', () => {
    render(
      <Animation once={true} className="test-class">
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveClass('test-class');
  });

  it('should use defaul values for x and y when not provided', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'initial',
      '{"opacity":0,"x":undefined,"y":undefined}',
    );
  });

  it('should use the default delay when delay is not provided', () => {
    render(
      <Animation once={true}>
        <div>Teste</div>
      </Animation>,
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'transition',
      '{"duration":0.5,"delay":undefined}',
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

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveAttribute(
      'viewport',
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
