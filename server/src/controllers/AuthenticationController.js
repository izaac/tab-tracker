const { User } = require('../models');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: `The ${req.body.email} address already exists. and error was ${err}`,
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: 'The user information was incorrect.',
        });
      }

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The user information was incorrect.',
        });
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
      });
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login.',
      });
    }
  },
};
