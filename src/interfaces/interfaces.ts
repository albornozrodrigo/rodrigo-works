import { ReactNode } from 'react';

export interface Profile {
  name: string | ReactNode;
  email: string;
  company: string | null;
  location: string;
  github: string;
  linkedIn: string;
  resume: string;
  skills: string[];
  hireable: boolean;
}
