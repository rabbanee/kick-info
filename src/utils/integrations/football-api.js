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

async function fetchFixtures(params = {}) {
  const response = await axios.get(`${config.externalAPi.baseUrl}/fixtures`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
   params: {
    leagues: params.leagues,
    id: params.id,
    season: params.season,
    date: params.date,
    }
  });
  return response.data;
}


async function fetchCountries(params = {}) {
  const response = await axios.get(`${config.externalAPi.baseUrl}/countries`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
    params: {
      name: params.name,
      code: params.code,
      search: params.search
    }
  });
  return response.data;
}

async function fetchLeagues(params = {}) {
  const response = await axios.get(`${config.externalAPi.baseUrl}/leagues`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
    params: {
      country: params.country,
      name: params.name,
      code: params.code,
      season: params.season
    }
  });
  return response.data;
}

async function fetchSeasons(params = {}) {
  const response = await axios.get(`${config.externalAPi.baseUrl}/seasons`, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
    params: {
      league: params.league,
      season: params.season
    }
  });
  return response.data;
}





module.exports = {
  fetchTimezone,
  fetchFixtures,
  fetchCountries,
  fetchLeagues,
  fetchSeasons
};
