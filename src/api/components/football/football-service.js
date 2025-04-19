const footballRepository = require('./football-repository')
const { fetchTimezone } = require('../../../utils/integrations/football-api');
const { AppError } = require('../../../utils/errors');


async function getTimezone() {
  // let timezone = await footballRepository.GetTimezone("timezone list");
  // // console.log('timezone', timezone);
  // if (!timezone || timezone.data.length == 0) {
  //   const timezoneResponse = await fetchTimezone();
  //   // console.log('timezoneResponse', timezoneResponse);
  //   const timezoneResult = await footballRepository.SaveTimezone('timezone list', timezoneResponse.response);
  //   timezone = timezoneResult;
  //   // console.log('timezoneResult', timezoneResult);
  // }

  // return timezone;
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

module.exports = {
  getTimezone
}
