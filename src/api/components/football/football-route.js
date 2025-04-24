const express = require('express');

const footballController = require('./football-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/football', route);

  // Get list of football
  route.get('/timezone', footballController.getTimezone);
  route.get('/standings', (req, res) => {

    console.log('Query params in route:', req.query);
    
    const { season, league} = req.query; 
    
    if (!season || !league) {
      return res.status(400).json({ error: 'Missing required query parameters (season, league)' });
    }

    footballController.getStandings(season, league)
      .then((standings) => {
        res.json(standings);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  route.get('/fixture/statistics', (req, res) => {
    const { fixture, team } = req.query;
  
    if (!fixture || !team) {
      return res.status(400).json({ error: 'Missing required query parameters (fixture, team)' });
    }
  
    footballController.getfixtureStatistics(fixture, team)
      .then((statistics) => {
        res.json(statistics);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  route.get('/fixtures', footballController.getFixtures);
};
