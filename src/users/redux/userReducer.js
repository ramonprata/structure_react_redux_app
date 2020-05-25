import { SET_USERS, ANOTHER_USERS_ACTION } from './userActions';

export const INITIAL_USERS_STATE = {
  users: [],
  anotherState: null,
};

export default (state = INITIAL_USERS_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case ANOTHER_USERS_ACTION:
      return {
        ...state,
        anotherState: action.payload,
      };

    default:
      return state;
  }
};
