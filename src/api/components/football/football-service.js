const footballRepository = require('./football-repository')
const { fetchTimezone,fixtureslineups,headtohead, fetchFixtures} = require('../../../utils/integrations/football-api');


async function getTimezone() {
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

async function getfixtureslineups(queryParams) {
  const fixturesLineupsResponse = await fixtureslineups(queryParams);
  return fixturesLineupsResponse;
}

async function getheadtohead(queryParams) {
  const headToHeadResponse = await headtohead(queryParams);
  return headToHeadResponse;
}

module.exports = {
  getTimezone,
  getFixtures,
  getfixtureslineups,
  getheadtohead
}
