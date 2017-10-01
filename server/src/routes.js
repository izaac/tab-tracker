const AuthenticationController = require('./controllers/AuthenticationController');

module.exports = (app) => {
  /* GET /status endpoint */
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world',
    });
  });

  /* POST /register endpoint */
  app.post('/register', AuthenticationController.register);
};
