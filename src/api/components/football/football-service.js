const footballRepository = require('./football-repository')
const { fetchTimezone,fixtureslineups,} = require('../../../utils/integrations/football-api');
const { AppError } = require('../../../utils/errors');


async function getTimezone() {
 
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
  } catch (err) {
    console.error('[getTimezone] error:', err);
    throw new AppError(err.message || 'Internal Server Error', 500);
  }
}

async function getfixtureslineups() {
 
  try {
   
      const timezoneResponse = await fixtureslineups();
      timezone = timezoneResponse.response;
      await footballRepository.SaveTimezone('timezone list', timezoneResponse.response);

    return timezone;
  } catch (err) {
    console.error('[getTimezone] error:', err);
    throw new AppError(err.message || 'Internal Server Error', 500);
  }
}


// football-service.js

async function getheadtohead() {
 
  try {
   
      const timezoneResponse = await gheadtohead();
      timezone = timezoneResponse.response;
      await footballRepository.SaveTimezone('timezone list', timezoneResponse.response);

    return timezone;
  } catch (err) {
    console.error('[getTimezone] error:', err);
    throw new AppError(err.message || 'Internal Server Error', 500);
  }
}

module.exports = {
getTimezone,
getfixtureslineups,
getheadtohead
}
