var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send({ express: 'Hello From Express Server of BeHonest' });
});

require('./db/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));