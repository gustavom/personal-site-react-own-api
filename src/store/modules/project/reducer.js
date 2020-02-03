import produce from 'immer';

const INITIAL_STATE = {
  project: [],
};

export default function project(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@project/UPDATE_PROJECT_SUCCESS': {
        draft.project = action.payload.project;
        break;
      }

      default:
      // return state;
    }
  });
}
