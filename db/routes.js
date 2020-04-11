module.exports = app => {
  const BeHonestApi = require('../api/model');

  app.post('/insert/users', BeHonestApi.insertUserWrites);

  app.post('/insert/honests', BeHonestApi.insertHonestWrites);

  app.post('/check/form', BeHonestApi.checkFormUrl);
}