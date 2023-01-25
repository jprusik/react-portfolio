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
  links: AuthorLinks;
  locationBasis: string;
  name: string;
}

export type Education = {
  description: string;
  name: string;
  year: string;
}

export type Organization = {
  id: string;
  description: string;
  ended: string;
  exclude?: boolean;
  location?: string;
  name: string;
  recurringTasks?: string[];
  roles: string[];
  started: string;
  teams: string[];
}

export type Project = {
  id: string;
  audience: string;
  description: string;
  exclude?: boolean;
  links: string[];
  name: string;
  openSource: boolean;
  org: string;
  samples: string[];
  skills: string[];
  teamSize: string; // @TODO This should be a defined string enum or number
  technologies: string[];
  year: string;
}

export type Technology = {
  id: string;
  hide?: boolean;
  name: string;
}
