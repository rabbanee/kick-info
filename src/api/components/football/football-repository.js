const { Football } = require('../../../models');


async function GetTimezone(name) {
  return Football.findOne({ name });
}

async function SaveTimezone(name, data) {
  return await Football.create({ name, data });
}

module.exports = {
  GetTimezone,
  SaveTimezone
};
