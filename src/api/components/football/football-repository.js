const { Football } = require('../../../models');


const saveCountries = async () => {
  try {
    const res = await axios.get(`${config.externalAPi.baseUrl}`);
    const countries = res.data.response.map(country => country.name);

    const footballData = new FootballModel({
      countries: countries
    });

    await footballData.save();
    console.log('Countries saved successfully');
  } catch (err) {
    console.error('Error saving countries:', err.message);
  }
};

const saveLeagues = async () => {
  try {
    const res = await axios.get(`${config.externalAPi.baseUrl}`);
    const leagues = res.data.response.map(league => league.name);

    const footballData = new FootballModel({
      leagues: leagues
    });

    await footballData.save();
    console.log('Leagues saved successfully');
  } catch (err) {
    console.error('Error saving leagues:', err.message);
  }
};

const saveSeasons = async () => {
  try {
    const res = await axios.get(`${config.externalAPi.baseUrl}`);
    const seasons = res.data.response.map(season => season.name);

    const footballData = new FootballModel({
      seasons: seasons
    });

    await footballData.save();
    console.log('Seasons saved successfully');
  } catch (err) {
    console.error('Error saving seasons:', err.message);
  }
};

const saveFixtures = async () => {
  try {
    const res = await axios.get(`${config.externalAPi.baseUrl}`);
    const fixtures = res.data.response.map(fixture => fixture.name);

    const footballData = new FootballModel({
      fixtures: fixtures
    });

    await footballData.save();
    console.log('Fixtures saved successfully');
  } catch (err) {
    console.error('Error saving fixtures:', err.message);
  }
};


async function GetTimezone(name) {
  return Football.findOne({ name });
}

async function SaveTimezone(name, data) {
  return await Football.create({ name, data });
}
async function GetCountries(name) {
  return Football.findOne({name});
}

async function SaveCountries(name, data) {
  return saveCountries(name, data);
}

// async function GetLeagues(name) {
//   return Football.findOne({name});
// }

async function SaveLeagues(name, data) {
  return saveLeagues(name, data);
}

// async function GetSeasons(name) {
//   return Football.findOne({name});
// }

async function SaveSeasons(name, data) {
  return saveSeasons(name, data);
}

async function GetFixtures(name) {
  return Football.findOne({name});
}

async function SaveFixtures(name, data) {
  return saveFixtures(name, data);
}

module.exports = {
  GetTimezone,
  SaveTimezone,
  GetCountries,
  SaveCountries,
  // GetLeagues,
  SaveLeagues,
  // GetSeasons,
  SaveSeasons,
  GetFixtures,
  SaveFixtures,
};
