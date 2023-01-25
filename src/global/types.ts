export type AuthorLinks = {
  email?: string;
  gitHubHandle?: string;
  linkedInHandle?: string;
  stackOverflow?: string;
  twitterHandle?: string;
  websiteDomain?: string;
}

export type Author = {
  currentRoles: string[];
  funFacts: string[];
  locationBasis: string;
  links: AuthorLinks;
  name: string;
}

export type Education = {
  name: string;
  description: string;
  year: string;
}

export type Organization = {
  id: string;
  name: string;
  description: string;
  recurringTasks: string[];
  location: string;
  started: string;
  ended: string;
  roles: string[];
  teams: string[];
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
