module.exports = app => {
  const BeHonestInsertApi = require('../api/insert');

  app.post('/insert/users', BeHonestInsertApi.insertUserWrites);
}