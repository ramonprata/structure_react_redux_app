import { getFilterUsersByName } from './userUtils';
import UserService from './userService';
class UserManager {
  async getUsers(textFilter) {
    try {
      const filter = getFilterUsersByName(textFilter);
      const apiResponse = await UserService.getUsers(filter);
      const users = apiResponse.data;
      return users;
    } catch (error) {
      throw new Error(MESSAGES.ERROR_ON_GET_USERS);
    }
  }
}
