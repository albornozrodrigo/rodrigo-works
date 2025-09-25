import { ReactNode } from 'react';

export interface Profile {
  name: string | ReactNode;
  description: string | ReactNode;
  company: string | null;
  location: string;
  github: string;
  linkedIn: string;
  resume: string;
  skills: string[];
  hireable: boolean;
}
