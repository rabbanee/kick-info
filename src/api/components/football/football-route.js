const express = require('express');

const footballController = require('./football-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/football', route);

  // Get list of football
  route.get('/timezone', footballController.getTimezone);
  route.get('/fixtures', footballController.getFixtures);

  route.get('/fixtures/lineups', footballController.getfixtureslineups)
  route.get('/fixtures/headtohead', footballController.getheadtohead);

  route.get('/fixtures/statistics', footballController.getfixtureStatistics);
  route.get('/standings', footballController.getStandings);
};
