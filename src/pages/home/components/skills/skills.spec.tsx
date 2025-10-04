import { render } from '@testing-library/react';
import { Skills } from './index';

describe('skills component', () => {
  test('should render the badges', async () => {
    const { container } = render(<Skills />);

    const badges = container.getElementsByClassName('badge');

    expect(badges.length).toBeGreaterThan(40);
  });
});
