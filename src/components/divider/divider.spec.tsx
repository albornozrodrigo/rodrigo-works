import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Divider } from './index';

test('check if component is rendered', () => {
  render(<Divider data-testid="divider" />);
  expect(screen.getByTestId('divider')).toBeInTheDocument();
});

test('check if margin prop is rendered', () => {
  render(<Divider margin data-testid="divider" />);
  expect(screen.getByTestId('divider')).toHaveClass('my-16');
});
