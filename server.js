const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const config = require('./config')['database'];

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

// Connection URL
var url = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/drawchange`;
console.log(url);
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to MongoDB!!");
});

var updateAdminPassword = function(db, email, newPassword, callback) {
  var collection = db.collection('admin');
  collection.updateOne({ email : email }
    , { $set: { password : newPassword } }, function(err, result) {
    callback(result);
  });
}

var registerVolunteer = function(db, email, password, callback) {
  var collection = db.collection('volunteer');
  collection.insertOne({
      email: email, 
      password: password
  });
}