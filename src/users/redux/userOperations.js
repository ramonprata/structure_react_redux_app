import { notifyError } from '../notification/redux/notificationActions';
import { setUsers } from '../redux/userActions';

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    const users = await UserManager.getUsers();
    dispatch(setUsers(users));
  } catch (error) {
    dispatch(showLoading(false));
    dispatch(notifyError(error.message));
  }
};
