export type Author = {
  // @TODO
}

export type Education = {
  // @TODO
}

export type Organizations = {
  // @TODO
}

export type Project = {
  audience: string;
  description: string;
  id: string;
  links: string[];
  name: string;
  openSource: boolean;
  org: string;
  samples: string[];
  skills: string[];
  teamSize: string;
  technologies: string[];
  year: string;
}

export type Technology = {
  id: string;
  name: string;
  hide?: boolean;
}
