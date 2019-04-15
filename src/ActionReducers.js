import { mergeWith } from 'lodash';

export const timelineInitialState = {
  filtered: {
    projects: [],
    organizations: []
  }
};

export const filteredReducer = (state = timelineInitialState, action, data) => {
  switch (action) {
    case 'add':
      return Object.assign({}, state, { filtered: mergeWithArrays(state.filtered, data) });
    default:
      return state;
  }
};

const mergeWithArrays = (sourceObject, targetObject) => {
  return mergeWith(sourceObject, targetObject, (sourceArray, targetArray) => sourceArray.concat(targetArray));
};
