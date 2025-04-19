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

module.exports = {
  fetchTimezone,
};
