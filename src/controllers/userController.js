import userService from "../services/userService.js";


class UserController {
  addUser(login, password, role) {
    const validationError = userService.validateLogin(login) || userService.validatePassword(password);

    if (validationError) {
      throw new Error(validationError);
    }

    userService.addUser(login, password, role);
  }

  getAllUsers() {
    return userService.getAllUsers();
  }
}

export default new UserController();
