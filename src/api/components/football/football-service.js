const footballRepository = require('./football-repository');
const { fetchTimezone, fetchFixtures, fetchStandings, fixtureStatistics } = require('../../../utils/integrations/football-api');

async function getTimezone() {
  let timezone = await footballRepository.GetTimezone("timezone list");

  try {
    let timezone = await footballRepository.GetTimezone("timezone list");

  if (!timezone?.data?.length) {
    const timezoneResponse = await fetchTimezone();
    timezone = timezoneResponse.response;
    await footballRepository.SaveTimezone('timezone list', timezoneResponse.response);
  } else {
    timezone = timezone.data;
  }

  return timezone;
}

async function getFixtures(queryParams) {
  const fixturesResponse = await fetchFixtures(queryParams);
  return fixturesResponse;
}

async function getStandings(league, season) {
  console.log("Fetching standings for league:", league, "and season:", season);

  const url = `${config.externalAPi.baseUrl}/standings?season=${season}&league=${league}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'x-rapidapi-key': config.externalAPi.apiKey, 
      },
    });

    if (!response || !response.data || !response.data.response || response.data.response.length === 0) {
      throw new AppError('No standings data found for the given season and league', 404); 
    }

    const standingsData = await fetchStandings({ league, season });

    console.log("Standings data fetched:", standingsData); 
    
    return response.data.response[0].standings;

  } catch (err) {
    console.error('[getStandings] error:', err);
    throw new AppError(err.message || 'Failed to fetch standings', 500);
  }
}


async function getfixtureStatistics(fixture, team) {
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
    console.error('[getfixtureStatistics] error:', err);
    throw new AppError(err.message || 'Failed to fetch fixture statistics', 500);
  }
}

module.exports = {
  getTimezone,
  getStandings,
  getfixtureStatistics
  getTimezone,
  getFixtures
}
