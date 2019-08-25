export const SET_AUTHED_USERS = 'SET_AUTHED_USER';

export function receiveUsers(id) {
  return {
    type: SET_AUTHED_USERS,
    id
  };
}
