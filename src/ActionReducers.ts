import { mergeWith } from 'lodash';
import {
  TimelineActionType,
  TimelineData,
  TimelineState,
  TimelineStateFiltered
} from './types';

export const timelineInitialState = {
  filtered: {
    organizations: [],
    projects: []
  }
};

export const filteredReducer = (
  state: TimelineState = timelineInitialState,
  actionType: TimelineActionType,
  data: TimelineData
) => {
  switch (actionType) {
    case TimelineActionType.ADD:
      return Object.assign({}, state, { filtered: mergeWithArrays(state.filtered, data) });
    default:
      return state;
  }
};

const mergeWithArrays = (
  sourceObject: TimelineStateFiltered,
  targetObject: TimelineData
) => {
  return mergeWith(sourceObject, targetObject, (sourceArray, targetArray) => sourceArray.concat(targetArray));
};
