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
    return next(error);;
  }
}


async function getStandings(request, response, next) {
  console.log("Received query parameters:", request.query); 
  const { season, league } = request.query; 
  
    if (!season || !league) {
      return response.status(400).json({ error: 'Missing required query parameters (season, league)' });
    }

    try {
    const standings = await footballService.getStandings(league, season);
    return response.status(200)(200).json({
      status: 'success',
      message: 'Standings fetched successfully',
      data: standings
    });
  } catch (error) {
    const status = error instanceof AppError ? error.statusCode : 500;
    return response.status(status).json({
      status: 'error',
      message: 'Failed to fetch standings',
      details: error.message
    });
  }
}

async function getfixtureStatistics(request, response, next) {
  const { fixture, team } = request.query;

  if (!fixture || !team) {
    return response.status(400).json({ error: 'Missing required query parameters (fixture, team)' });
  }

  try {
    const statistics = await footballService.getfixtureStatistics(fixture, team);
    return response.status(200).json({
      status: 'success',
      message: 'Fixture statistics fetched successfully',
      data: statistics
    });
  } catch (error) {
    const status = error instanceof AppError ? error.statusCode : 500;
    return response.status(status).json({
      status: 'error',
      message: 'Failed to fetch fixture statistics',
      details: error.message
    });
  }
}

module.exports = {
  getTimezone,
  getStandings,
  getfixtureStatistics,
  getFixtures
};
