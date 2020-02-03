export function updateProjectRequest(data) {
  return {
    type: '@project/UPDATE_PROJECT_REQUEST',
    payload: { data },
  };
}
export function updateProjectSuccess(project) {
  return {
    type: '@project/UPDATE_PROJECT_SUCCESS',
    payload: { project },
  };
}
export function updateProjectFailure() {
  return {
    type: '@project/UPDATE_PROJECT_FAILURE',
  };
}
