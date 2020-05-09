var sql = require("./connect");

var BeHonestWrites = {};

BeHonestWrites.insertUserEntriesApi = (payload, result) => {
  var insertQuery = "INSERT INTO `user-entries` SET ? ";
  sql.query(insertQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    var publicLink =
      "https://bh.roboarjun.dev/" +
      payload["user-id"] +
      "/" +
      payload["form-id"];
    var privateLink = "https://bh.roboarjun.dev/v/" + payload["form-id"];
    var toAddress = payload.email;

    composeEmail({
      privateLink,
      publicLink,
      toAddress,
    });

    result(null, { id: response.insertId, ...payload });
    return;
  });
};

BeHonestWrites.insertHonestWritesApi = (payload, result) => {
  var insertQuery = "INSERT INTO `honest-entries` SET ?";
  sql.query(insertQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, { id: response.insertId, ...payload });
    return;
  });
};

BeHonestWrites.checkFormUrlApi = (payload, result) => {
  var selectQuery =
    "SELECT * FROM `user-entries` WHERE `user-id` = ? AND `form-id` = ?";
  sql.query(selectQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, response);
    return;
  });
};

BeHonestWrites.checkPostsDataApi = (payload, result) => {
  var selectQuery =
    "SELECT h.content, h.name, u.name as userName, u.`form-id`, u.`user-id`, u.email FROM `honest-entries` as h RIGHT JOIN `user-entries` as u ON u.`user-id` = h.`user-id` WHERE u.`view-id` = ?";
  sql.query(selectQuery, payload, (error, response) => {
    if (error) {
      console.log({ error });
      result(err, null);
      return;
    }

    result(null, response);
    return;
  });
};

module.exports = BeHonestWrites;
