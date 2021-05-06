import { client } from "../client/elasticsearch.js";

class UserRepository {
  async index(req, res) {
    try {
      const users = await client.search({
        index: "user",
      });

      return res.json(users);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  async store(req, res) {
    const { username, password, email } = req.body;

    try {
      const user = await client.index({
        index: "user",
        type: "user_type",
        body: {
          username,
          password,
          email,
        },
      });

      return res.json(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const user = await client.get({
        index: "user",
        id,
      });

      return res.json(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
      const user = await client.update({
        index: "user",
        id,
        body: {
          doc: {
            username,
            email,
            password,
          },
        },
      });

      return res.json(user);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      await client.delete({
        index: "user",
        id,
      });

      return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async query(req, res) {
    const data = await client.search({
      index: "user",
      body: {
        query: {
          match: {
            username: req.body.value,
          },
        },
      },
    });

    return res.json(data);
  }
}

export default new UserRepository();
