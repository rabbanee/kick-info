const footballService = require('./football-service');
const { successResponse, errorResponse } = require('../../../utils/response');
const { AppError } = require('../../../utils/errors');


async function getTimezone(request, response, next) {
  // return response.status(200).json({});
  try {
    const timezone = await footballService.getTimezone();

    return response.status(200).json(successResponse('Timezone fetched successfully', timezone));
    // return response.status(200).json(timezone);
  } catch (error) {
    const status = err instanceof AppError ? err.statusCode : 500;

    return response.status(status).json(errorResponse('Failed to fetch timezone', error.message));
  }
}

async function getfixtureslineups(request, response, next) {
  // return response.status(200).json({});
  try {
    const fixtureslineups= await footballService.getfixtureslineups();

    return response.status(200).json(successResponse('fixtureslineups successfully', fixtureslineups));
    // return response.status(200).json(timezone);
  } catch (error) {
    const status = err instanceof AppError ? err.statusCode : 500;

    return response.status(status).json(errorResponse('Failed to fixtureslineups', error.message));
  }
}

async function  getheadtohead(request, response, next) {
  // return response.status(200).json({});
  try {
    const fixtureslineups= await footballService.getheadtohead();

    return response.status(200).json(successResponse('fixtureslineups successfully', fixtureslineups));
    // return response.status(200).json(timezone);
  } catch (error) {
    const status = err instanceof AppError ? err.statusCode : 500;

    return response.status(status).json(errorResponse('Failed to fixtureslineups', error.message));
  }
}

module.exports = {
  getTimezone,
  getfixtureslineups,
  getheadtohead
}
