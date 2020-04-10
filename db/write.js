var sql = require('./connect');

var BeHonestWrites = {};

BeHonestWrites.insertUserEntriesData = (payload, result) => {
  var insertQuery = 'INSERT INTO `user-entries` SET ? ';
  sql.query(insertQuery, payload, (error, response) => {
    if(error) {
      console.log({error});
      result(err,null);
      return;
    }

    result(null, { id: response.insertId, ...payload });
    return;
  });
};

module.exports = BeHonestWrites;