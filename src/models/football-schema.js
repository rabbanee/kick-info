// module.exports = (db) => {
//   // const Football = db.model(
//   //   'Football',
//   //   db.Schema({
//   //     title: String,
//   //   })
//   // );

//   const FootballTimezone = db.model(
//     'FootballTimezone',
//     db.Schema({
//       name: String,
//       timezone: [String],
//     })
//   );

//   // const Player = db.model(
//   //   'Player',
//   //   db.Schema({
//   //     name: String,
//   //     team: {
//   //       type: db.Schema.Types.ObjectId,
//   //       ref: 'Team',
//   //     },
//   //   })
//   // );


module.exports = (db) =>
  db.model(
    'Football',
    db.Schema({
      name: String,
      data: [String],
    })
  
  );

