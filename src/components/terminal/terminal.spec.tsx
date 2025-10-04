import { render, screen } from '@testing-library/react';
import { Profile } from '../../interfaces/interfaces';
import { Terminal } from './index';

const profile: Profile = {
  name: 'Fulano',
  email: 'rodrigo.albornoz.f@gmail.com',
  company: 'Loveg',
  location: 'São Paulo',
  github: 'https://github.com/albornozrodrigo',
  linkedIn: 'https://www.linkedin.com/in/albornozrodrigo/',
  resume: '',
  skills: ['TypeScript', 'React', 'NextJS', 'NestJS', 'React Query'],
  hireable: true,
};

test('check if component prop is rendered', () => {
  render(<Terminal profile={profile} />);
  expect(screen.getByText('Fulano')).toBeInTheDocument();
  expect(screen.getByText('Loveg')).toBeInTheDocument();
  expect(screen.getByText('São Paulo')).toBeInTheDocument();
  expect(screen.getByText('TypeScript')).toBeInTheDocument();
  expect(screen.getByText('React')).toBeInTheDocument();
  expect(screen.getByText('NextJS')).toBeInTheDocument();
  expect(screen.getByText('NestJS')).toBeInTheDocument();
  expect(screen.getByText('React Query')).toBeInTheDocument();
  expect(screen.getByText('true')).toBeInTheDocument();
});
