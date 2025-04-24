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
  try {
    const params = request.query; // Mengambil query params
    const fixtures = await footballService.getFixtures(params);
    return response.status(200).json(successResponse('Fixtures fetched successfully', fixtures));
  } catch (error) {
    console.error('[getFixtures] error:', error);
    return next(error);
  }
}

async function getCountries(request, response, next) {
  try {
    const params = request.query; // Mengambil query params
    const countries = await footballService.getCountries(params);
    return response.status(200).json(successResponse('Countries fetched successfully', countries));
  } catch (error) {
    console.error('[getCountries] error:', error);
    return next(error);
  }
}

async function getLeagues( request, response, next) {
  try {
    const params = request.query; // Mengambil query params
    const leagues = await footballService.getLeagues(params);
    return response.status(200).json(successResponse('Leagues fetched successfully', leagues));
  } catch (error) {
    console.error('[getLeagues] error:', error);
    return next(error);
  }
}

async function getSeasons(request, response, next) {
  try {
    const params = request.query; // Mengambil query params
    const seasons = await footballService.getSeasons(params);
    return response.status(200).json(successResponse('Seasons fetched successfully', seasons));
  } catch (error) {
    console.error('[getSeasons] error:', error);
    return next(error);
  }
}

module.exports = {
  getTimezone,
  getFixtures,
  getCountries,
  getLeagues,
  getSeasons,
};
