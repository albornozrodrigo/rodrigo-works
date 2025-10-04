import { render, screen } from '@testing-library/react';
import { SectionTitle } from './index';

test('check if component prop is rendered', () => {
  render(<SectionTitle title="Cases e Projetos" />);
  expect(screen.getByText('Cases e Projetos')).toBeInTheDocument();
});
