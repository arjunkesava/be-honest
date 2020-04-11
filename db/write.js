var sql = require('./connect');

var BeHonestWrites = {};

BeHonestWrites.insertUserEntriesApi = (payload, result) => {
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

BeHonestWrites.checkFormUrlApi = (payload, result) => {
  var selectQuery = 'SELECT * FROM `user-entries` WHERE `user-id` = ? AND `form-id` = ?';
  sql.query(selectQuery, payload, (error, response) => {
    if(error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, response);
    return;
  });
}

module.exports = BeHonestWrites;