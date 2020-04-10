var mysql = require('mysql');

function startConnection() {
  return 
}

function endConnection (connection) {
  connection.end();
}

var db = {};

db.insertUserEntriesData = function (data) {
  var connection = startConnection();
  connection.connect();
  var insertQuery = 'INSERT INTO `user-entries` SET ? ';
  return connection.query(insertQuery, data, function (error, results, fields) {
    if (error) throw error;
    console.log({ error, results, fields });
    endConnection(connection);
    return results.insertId;
  });
}

module.exports = db;