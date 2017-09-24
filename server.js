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
  updateAdminPassword(db, function() {
    db.close();
  });
});

var updateAdminPassword = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('admin');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ email : "admin@drawchange.org" }
    , { $set: { password : "equifax" } }, function(err, result) {
    console.log("Updated the admin password");
    callback(result);
  });
}