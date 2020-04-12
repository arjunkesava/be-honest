var sql = require('./connect');

var BeHonestWrites = {};

BeHonestWrites.insertUserEntriesApi = (payload, result) => {
  var insertQuery = 'INSERT INTO `user-entries` SET ? ';
  sql.query(insertQuery, payload, (error, response) => {
    if (error) {
      console.log({error});
      result(err, null);
      return;
    }

    result(null, { id: response.insertId, ...payload });
    return;
  });
};

BeHonestWrites.insertHonestWritesApi = (payload, result) => {
  var insertQuery = 'INSERT INTO `honest-entries` SET ?';
  sql.query(insertQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, { id: response.insertId, ...payload });
    return;
  });
}

BeHonestWrites.checkFormUrlApi = (payload, result) => {
  var selectQuery = 'SELECT * FROM `user-entries` WHERE `user-id` = ? AND `form-id` = ?';
  sql.query(selectQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, response);
    return;
  });
}

BeHonestWrites.checkPostsDataApi = (payload, result) => {
  var selectQuery = 'SELECT h.content, h.name FROM `honest-entries` as h INNER JOIN `user-entries` as u ON u.`user-id` = h.`user-id` WHERE u.`view-id` = ?';
  sql.query(selectQuery, payload, (error, response) => {
    if(error) {
      console.log({ error });
      result(err, null);
      return;
    }

    if (!!response) {
      response = [{}];
    }
    
    result(null, response);
    return;
  });
}

// `honest-entries`;
// `user-entries`;

module.exports = BeHonestWrites;