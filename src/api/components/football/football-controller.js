const footballService = require('./football-service');
const { successResponse } = require('../../../utils/response');
const { errorResponder, errorTypes } = require('../../../core/errors');


async function getTimezone(request, response, next) {
  try {
    const timezone = await footballService.getTimezone();

    return response.status(200).json(successResponse('Timezone fetched successfully', timezone));
  } catch (error) {
    console.error('[getTimezone] error:', error);
    return next(error);;
  }
}

async function getFixtures(request, response, next) {
  const queryParams = request.query;
  try {
    const fixturesResponse = await footballService.getFixtures(queryParams);
    if (fixturesResponse.errors && Object.keys(fixturesResponse.errors).length > 0) {
      const errorMessage = Object.values(fixturesResponse.errors)[0];
      throw errorResponder(errorTypes.EXTERNAL, errorMessage);
    }
    return response.status(200).json(successResponse('Fixtures fetched successfully', fixturesResponse.response));
  } catch (error) {
    console.error('[getFixtures] error:', error);
    return next(error);
  }
}

async function getfixtureslineups(request, response, next) {
  const queryParams = request.query;
  try {
    const fixtureslineups= await footballService.getfixtureslineups(queryParams);
    if (fixtureslineups.errors && Object.keys(fixtureslineups.errors).length > 0) {
      const errorMessage = Object.values(fixtureslineups.errors)[0];
      throw errorResponder(errorTypes.EXTERNAL, errorMessage);
    }
    return response.status(200).json(successResponse('fixtureslineups successfully', fixtureslineups.response));
  } catch (error) {
    console.error('[getFixtures] error:', error);
    return next(error);
  }
}

async function  getheadtohead (request, response, next) {
  const queryParams = request.query;
  try {
    const headToHeadResponse = await footballService.getheadtohead(queryParams);
    if (headToHeadResponse.errors && Object.keys(headToHeadResponse.errors).length > 0) {
      const errorMessage = Object.values(headToHeadResponse.errors)[0];
      throw errorResponder(errorTypes.EXTERNAL, errorMessage);
    }
    return response.status(200).json(successResponse('headtohead successfully', headToHeadResponse.response));
  } catch (error) {
    console.error('[getFixtures] error:', error);
    return next(error);
  }
}


async function getStandings(request, response, next) {
  const queryParams = request.query;
  try {
    const standings = await footballService.getStandings(queryParams);
    return response.status(200).json(successResponse('Standings fetched successfully', standings.response));

  } catch (error) {
    console.error('[getStandings] error:', error);
    return next(error);
  }
}

async function getfixtureStatistics(request, response, next) {
  const queryParams = request.query;

  try {
    const statistics = await footballService.getfixtureStatistics(queryParams);
    if (statistics.errors && Object.keys(statistics.errors).length > 0) {
      const errorMessage = Object.values(statistics.errors)[0];
      throw errorResponder(errorTypes.EXTERNAL, errorMessage);
    }
    return response.status(200).json(successResponse('Fixture statistics fetched successfully', statistics.response));
  } catch (error) {
    console.error('[getfixtureStatistics] error:', error);
    return next(error);
  }
}

module.exports = {
  getTimezone,
  getFixtures,
  getfixtureslineups,
  getheadtohead,
  getStandings,
  getfixtureStatistics,
}
