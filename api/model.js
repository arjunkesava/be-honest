var BeHonestWrites = require('../db/write');
var random = require('../helpers/generateRandom'); 

exports.insertUserWrites = (req,res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var generatedUserId = random.generateRandom();
  var feedbackFormId = random.generateRandom();
  var viewFormId = random.generateRandom(15);

  var payload = {
    name: req.body.payload.name,
    email: req.body.payload.email,
    'user-id': generatedUserId,
    'form-id': feedbackFormId,
    'view-id': viewFormId
  };

  // Save Customer in the database
  BeHonestWrites.insertUserEntriesApi(payload, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while inserting the User Entries."
      });
    } else {
      res.send(data);
    }
  });
}

exports.insertHonestWrites = (req,res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  
  var payload = {
    name: req.body.payload.name || '',
    content: req.body.payload.content,
    'user-id': req.body.payload.userId
  };

  BeHonestWrites.insertHonestWritesApi(payload, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while inserting the User Entries."
      });
    } else {
      res.send(data);
    }
  });
}

exports.checkFormUrl = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var payload = Object.values(req.body.payload);

  BeHonestWrites.checkFormUrlApi(payload, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while checking the User Form."
      });
    } else {
      res.send(data);
    }
  });
}

exports.checkPostsData = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  var payload = Object.values(req.body.payload);

  BeHonestWrites.checkPostsDataApi(payload, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while checking the Posts Data."
      });
    } else if (!!data.length) {
      res.send(data);
    } else {
      res.status(404).send({
        message: "Nothing found!"
      })
    }
  });
}