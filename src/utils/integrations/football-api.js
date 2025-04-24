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

async function fetchStandings(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`);
  const url = `${config.externalAPi.baseUrl}/standings?${queryParamsArray.join('&')}`;

  const response = await axios.get(url, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response fetchStandings :',response.data)
  return response.data;
}

async function fixtureStatistics(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`);
  const url = `${config.externalAPi.baseUrl}/fixtures/statistics?${queryParamsArray.join('&')}`;

  const response = await axios.get(url, {
    headers: {
      'x-rapidapi-key': config.externalAPi.apiKey,
    },
  });
  console.log('response fixtureStatistics :',response.data);
  return response.data;
}


module.exports = {
  fetchTimezone,
  fetchFixtures,
  fetchCountries,
  fetchLeagues,
  fetchSeasons,
  fixtureslineups,
  headtohead,
  fetchStandings,
  fixtureStatistics
};




