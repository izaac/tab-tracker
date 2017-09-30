module.exports = (app) => {
  /* GET /status endpoint */
  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world',
    });
  });

  /* POST /register endpoint */
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email} your user was registered.`,
    });
  });
};
