import UserRepository from "../repositories/UserRepository.js";

class UserService {
  async createIndex(req, res) {
    return await UserRepository.index(req, res);
  }

  async createUser(req, res) {
    return await UserRepository.store(req, res);
  }

  async getUser(req, res) {
    return await UserRepository.show(req, res);
  }

  async update(req, res) {
    return await UserRepository.update(req, res);
  }

  async delete(req, res) {
    return await UserRepository.destroy(req, res);
  }

  async query(req, res) {
    return await UserRepository.query(req, res);
  }
}

export default new UserService();
