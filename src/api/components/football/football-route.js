const express = require('express');
const footballController = require('./football-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/football', route);

  // Get list of football
  // Daffa
  route.get('/timezone', footballController.getTimezone);
  route.get('/fixtures', footballController.getFixtures);

  // William Marcello
  route.get('/countries',footballController.getCountries);
  route.get('/leagues',footballController.getLeagues);

  // Adzra
  route.get('/fixtures/lineups', footballController.getfixtureslineups)
  route.get('/fixtures/headtohead', footballController.getheadtohead);

  // Xaverius
  route.get('/fixtures/statistics', footballController.getfixtureStatistics);
  route.get('/standings', footballController.getStandings);

  // Michael
  route.get('/seasons',footballController.getSeasons);
  route.get('/fixtures/rounds', footballController.getFixtureRounds)
};
