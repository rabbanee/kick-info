const express = require('express');


const football = require('./components/football/football-route');

module.exports = () => {
  const app = express.Router();

  football(app);

  return app;
}
