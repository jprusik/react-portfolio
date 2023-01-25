import { Organization, Project } from './dataTypes';

type OrganizationId = string;

type ProjectId = string;

export type TimelineStateFiltered = {
  organizations: OrganizationId[],
  projects: ProjectId[]
}

export type TimelineState = {
  filtered: TimelineStateFiltered
}

export enum TimelineActionType {
  ADD = 'add',
  REMOVE = 'remove'
}

export enum TimelineDataType {
  PROJECTS = 'projects',
  ORGANIZATIONS = 'organizations'
}

export type TimelineData = {
  organizations?: Organization[],
  projects?: Project[]
}
