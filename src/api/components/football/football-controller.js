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


module.exports = {
  getTimezone,
  getFixtures
};
