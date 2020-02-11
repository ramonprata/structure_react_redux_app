export const createUser = newUser => async dispatch => {
  try {
    const data = treatUserBeforeSend(newUser);
    const apiResponse = await axios.post('/someurl/..', data);
    dispatch({
      type: SAVE_USER,
      payload: { ...apiResponse.data }
    });
  } catch (error) {
    treatError(dispatch, error);
  }
};
