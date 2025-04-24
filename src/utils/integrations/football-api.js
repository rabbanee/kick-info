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

async function fetchStandings(queryParams) {
  const { season, league } = queryParams;
  const url = `${config.externalAPi.baseUrl}/standings?season=${season}&league=${league}`;

  console.log("Requesting standings with URL:", url);  

  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': config.externalAPi.apiKey,  
      },
    });

    console.log("Received response:", response.data);

    if (!response || !response.data || !response.data.response || response.data.response.length === 0) {
      throw new AppError('No standings data found for the given season and league', 404); 
    }

    return response.data.response[0].standings;

  } catch (err) {
    console.error('[fetchStandings] error:', err);
    throw new AppError(err.message || 'Failed to fetch standings', 500);
  }
}

async function fixtureStatistics(fixture, team) {
  const url = `${config.externalAPi.baseUrl}/fixtures/statistics?fixture=${fixture}&team=${team}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': config.externalAPi.apiKey,
      },
    });

    if (!response || !response.data || !response.data.response || response.data.response.length === 0) {
      throw new AppError('No fixture statistics found for the given fixture and team', 404);  
    }

    return response.data.response[0].statistics;

  } catch (err) {
    console.error('[fixtureStatistics] error:', err);
    throw new AppError(err.message || 'Failed to fetch fixture statistics', 500);
  }
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
  fetchStandings,
  fixtureStatistics,
  fetchTimezone,
  fetchFixtures,
  fixtureslineups,
  headtohead,
  fetchStandings,
  fixtureStatistics
} ;

  fetchFixtures
};