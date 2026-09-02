import { render, screen } from '@testing-library/react';
import { Card } from './index';

const ChildComponent = ({ ...args }) => {
  return <div {...args}>Teste</div>;
};

test('check if child component is rendered', () => {
  render(
    <Card>
      <ChildComponent data-testid="child-element" />
    </Card>,
  );
  expect(screen.getByTestId('child-element')).toBeInTheDocument();
});
