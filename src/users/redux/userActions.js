export const SET_USERS = `users/SET_USERS`;
export const ANOTHER_USERS_ACTION = `users/ANOTHER_USERS_ACTION`;

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const createUser = (newUser) => async (dispatch) => {
  try {
    const data = treatUserBeforeSend(newUser);
    const apiResponse = await axios.post('/someurl/..', data);
    dispatch({
      type: SAVE_USER,
      payload: { ...apiResponse.data },
    });
  } catch (error) {
    treatError(dispatch, error);
  }
};

export const createUserGroupChat = (userId, selectedFriends) => async (dispatch) => {
  try {
    const usersIds = selectedFriends.map((user) => user.Id);
    const data = {
      userId,
      usersIds,
    };

    const groupResponse = await axios.post('/someurl/..', data);
    const groupId = groupResponse.groupId;
    const friendsChat = await axios.get(`/someurl?groupId=${groupId}`);
    const friendsByName = _.orderBy(friendsChat, ['name'], ['asc']);

    dispatch({
      type: LIST_FRIENDS_CHAT,
      payload: { friendsChat: friendsByName },
    });
  } catch (error) {
    treatError(dispatch, error);
  }
};
