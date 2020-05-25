class UserService {
  async getUsers(filter) {
    const URI = `${BASE_URL}/users&filter=${filter}`;
    return axios.get(URI);
  }
}
