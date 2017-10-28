const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  /* GET /status endpoint */
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world',
    });
  });

  /* POST /register endpoint */
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register,
  );

  /* POST /login endpoint */
  app.post(
    '/login',
    AuthenticationController.login,
  );
};
