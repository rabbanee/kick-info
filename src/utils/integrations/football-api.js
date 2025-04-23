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

module.exports = {
  fetchTimezone,
  fetchFixtures
};
