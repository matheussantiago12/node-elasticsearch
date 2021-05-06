import UserService from "../services/UserService.js";

class UserController {
  async createIndex(req, res) {
    return await UserService.createIndex(req, res);
  }

  async createUser(req, res) {
    return await UserService.createUser(req, res);
  }

  async getUser(req, res) {
    return await UserService.getUser(req, res);
  }

  async update(req, res) {
    return await UserService.update(req, res);
  }

  async delete(req, res) {
    return await UserService.delete(req, res);
  }

  async query(req, res) {
    return await UserService.query(req, res);
  }
}

export default new UserController();
