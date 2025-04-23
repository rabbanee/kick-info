// src/utils/external-api.js
const axios = require('axios');
const config = require('../../core/config');

async function fetchTimezone() {
  const response = await axios.get(`${config.externalAPi.baseUrl}/timezone`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  return response.data;
}

async function fixtureslineups() {
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures/lineups?fixture`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response fixtures :',response.data)
  return response.data;
}

async function  headtohead() {
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures/headtohead?h2h=33-34`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response headtohead :',response.data)
  return response.data;
}


module.exports = {
  fetchTimezone,
  fixtureslineups,
  headtohead
} ;
