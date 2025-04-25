const footballRepository = require("./football-repository");
const {
  fetchTimezone,
  fixtureslineups,
  headtohead,
  fetchFixtures,
  fixtureStatistics,
  fetchStandings,
  fetchLeagues,
  fetchCountries,
  fetchSeasons,
} = require("../../../utils/integrations/football-api");

async function getTimezone() {
  let timezone = await footballRepository.GetTimezone("timezone list");

  if (!timezone?.data?.length) {
    const timezoneResponse = await fetchTimezone();
    timezone = timezoneResponse.response;
    await footballRepository.SaveTimezone(
      "timezone list",
      timezoneResponse.response
    );
  } else {
    timezone = timezone.data;
  }

  return timezone;
}

async function getFixtures(queryParams) {
  const fixturesResponse = await fetchFixtures(queryParams);
  return fixturesResponse;
}

function filterFixtures(fixtures, { leagues, name, id, live }) {
  return fixtures.filter((fixture) => {
    const leaguesMatch = leagues ? fixture.leagues === leagues : true;
    const nameMatch = name ? fixture.name.includes(name) : true;
    const idMatch = id ? fixture.id === id : true;
    const liveMatch = live ? fixture.live === live : true;
    return leaguesMatch && nameMatch && idMatch && liveMatch;
  });
}

// football-service.js
async function getCountries(params = {}) {
  let countries = await footballRepository.GetCountries("countries list");

  const countriesResponse = await fetchCountries(params);
  countries = countriesResponse.response;

  return countries;
}

function filterCountries(countries, { name, code, search }) {
  return countries.filter((country) => {
    const nameMatch = name ? country.name.includes(name) : true;
    const codeMatch = code ? country.code === code : true;
    const searchMatch = search
      ? country.name.includes(search) || country.code.includes(search)
      : true;
    return nameMatch && codeMatch && searchMatch;
  });
}

async function getLeagues(params = {}) {
  const leaguesResponse = await fetchLeagues(params);
  leagues = leaguesResponse.response;
  return leagues;
}

function filterLeagues(leagues, { countries, name, code, season }) {
  return leagues.filter((league) => {
    const countriesMatch = countries ? league.countries === countries : true;
    const nameMatch = name ? league.name.includes(name) : true;
    const codeMatch = code ? league.code === code : true;
    const seasonMatch = season ? league.season === season : true;
    return countriesMatch && nameMatch && codeMatch && seasonMatch;
  });
}

async function getSeasons(params = {}) {
  let seasons = await footballRepository.GetSeasons("seasons list");

  if (!seasons?.data?.length) {
    try {
      const seasonsResponse = await fetchSeasons(params);
      seasons = seasonsResponse?.response || []; // Pastikan tidak undefined

      if (seasons.length === 0) {
        seasons = getDummySeasons(); // Fallback data
      }

      await footballRepository.SaveSeasons("seasons list", seasons);
    } catch (error) {
      seasons = getDummySeasons(); // Fallback jika API error
    }
  } else {
    seasons = filterSeasons(seasons.data, params);
  }

  return seasons;
}

function getDummySeasons() {
  return [
    { id: 1, year: "2023", name: "2023/2024", is_current: true },
    { id: 2, year: "2022", name: "2022/2023", is_current: false },
  ];
}
async function getfixtureslineups(queryParams) {
  const fixturesLineupsResponse = await fixtureslineups(queryParams);
  return fixturesLineupsResponse;
}

async function getheadtohead(queryParams) {
  const headToHeadResponse = await headtohead(queryParams);
  return headToHeadResponse;
}

async function getStandings(queryParams) {
  const standings = await fetchStandings(queryParams);
  return standings;
}

async function getfixtureStatistics(queryParams) {
  const headToHeadResponse = await fixtureStatistics(queryParams);
  return headToHeadResponse;
}

module.exports = {
  getTimezone,
  getFixtures,
  getfixtureslineups,
  getheadtohead,
  getStandings,
  getfixtureStatistics,
  getCountries,
  getLeagues,
  getSeasons,
};
