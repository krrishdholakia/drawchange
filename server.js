const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const config = require('./config')['database'];

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/api', api);
app.get('/api', (req, res) => {
  let email = req.query.email
  let password = req.query.password
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to MongoDB!!");
    var collection = db.collection('volunteer');
    res.setHeader('Content-Type', 'application/json');

    var vol = collection.findOne({
      email: email,
      password: password
    }).then(
      (result) => {
        console.log(result)
        if (result) {
          res.send({success: 'true'})
        } else {
          res.send({success: 'false'})
        }
      }
    );
  });
})


app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});


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

var volunteerLogin = function(db, email, password, callback) {

}

var updateAdminPassword = function(db, email, newPassword, callback) {
  var collection = db.collection('admin');
  collection.updateOne({ email : email }
    , { $set: { password : newPassword } }, function(err, result) {
    callback(result);
  });
}

var registerVolunteer = function(db, email, password, callback) {
  var collection = db.collection('volunteer');
  vol = collection.insertOne({
    email: email,
    password: password
});

}
