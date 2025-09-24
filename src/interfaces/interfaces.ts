export interface Profile {
  name: string | JSX.Element;
  description: string | JSX.Element;
  company: string | null;
  location: string;
  github: string;
  linkedIn: string;
  resume: string;
  skills: string[];
  hireable: boolean;
}
