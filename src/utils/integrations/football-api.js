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

async function fetchFixtures(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`);
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures?${queryParamsArray.join('&')}`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  return response.data;
}

async function fixtureslineups(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`);
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures/lineups${queryParamsArray.join('&')}`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response fixtures :',response.data)
  return response.data;
}

async function  headtohead(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`);
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures/headtohead?${queryParamsArray.join('&')}`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response headtohead :',response.data)
  return response.data;
}


module.exports = {
  fetchTimezone,
  fetchFixtures,
  fixtureslineups,
  headtohead
} ;
