// src/utils/external-api.js
const axios = require("axios");
const config = require("../../core/config");

async function fetchTimezone() {
  const response = await axios.get(`${config.externalAPi.baseUrl}/timezone`, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    },
  });
  return response.data;
}

async function fetchFixtures(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const response = await axios.get(
    `${config.externalAPi.baseUrl}/fixtures?${queryParamsArray.join("&")}`,
    {
      headers: {
        "x-rapidapi-key": config.externalAPi.apiKey,
      },
    }
  );
  return response.data;
}

async function fetchCountries(params = {}) {
  const response = await axios.get(`${config.externalAPi.baseUrl}/countries`, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    },
    params: {
      name: params.name,
      code: params.code,
      search: params.search,
    },
  });
  return response.data;
}

async function fetchLeagues(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const response = await axios.get(`${config.externalAPi.baseUrl}/leagues?${queryParamsArray.join(
    "&"
  )}`, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    }});
  console.log('response: ', response.data);
  return response.data;
}

async function fetchSeasons(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const response = await axios.get(`${config.externalAPi.baseUrl}/leagues/seasons?${queryParamsArray.join(
    "&"
  )}`, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    }
  });
  return response.data;
}

async function fixtureslineups(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const response = await axios.get(
    `${config.externalAPi.baseUrl}/fixtures/lineups?${queryParamsArray.join(
      "&"
    )}`,
    {
      headers: {
        "x-rapidapi-key": config.externalAPi.apiKey,
      },
    }
  );
  console.log("response fixtures :", response.data);
  return response.data;
}

async function headtohead(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const response = await axios.get(
    `${config.externalAPi.baseUrl}/fixtures/headtohead?${queryParamsArray.join(
      "&"
    )}`,
    {
      headers: {
        "x-rapidapi-key": config.externalAPi.apiKey,
      },
    }
  );
  console.log("response headtohead :", response.data);
  return response.data;
}

async function fetchStandings(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const url = `${config.externalAPi.baseUrl}/standings?${queryParamsArray.join(
    "&"
  )}`;

  const response = await axios.get(url, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    },
  });
  console.log("response fetchStandings :", response.data);
  return response.data;
}

async function fixtureStatistics(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const url = `${
    config.externalAPi.baseUrl
  }/fixtures/statistics?${queryParamsArray.join("&")}`;

  const response = await axios.get(url, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    },
  });
  console.log("response fixtureStatistics :", response.data);
  return response.data;
}

async function fetchRounds(queryParams) {
  const queryParamsArray = Object.keys(queryParams).map(
    (key) => `${key}=${queryParams[key]}`
  );
  const url = `${
    config.externalAPi.baseUrl
  }/fixtures/rounds?${queryParamsArray.join("&")}`;

  const response = await axios.get(url, {
    headers: {
      "x-rapidapi-key": config.externalAPi.apiKey,
    },
  });
  console.log("response fetchRounds :", response.data);
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
  fixtureStatistics,
  fetchRounds
};
