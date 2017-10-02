const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const config = require('./config')['database'];
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

app.use(express.static(path.join(__dirname, 'public')));

// Connection URL
var url = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/drawchange`;

//REST API for Login
app.get('/api/login/volunteer', (req, res) => {
    //Parse request
    let email = req.query.email
    let password = req.query.password
    //Connect to DB
    MongoClient.connect(url)
    .then(
        //Get collection
        (db) => db.collection('volunteer')
    )
    .then(
        //Find user
        (collection) => collection.findOne({
            email: email,
            password: password
        })
    )
    .then(
        //Send Response
        (user) => {
            user
            ? res.send({success: 'true'})
            : res.send({success: 'false'})
        }
    )
    .catch(
        (err) => console.log(err)
    )
});


//Send Source Files
app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});


app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});


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
  vol = collection.insertOne({
      email: email,
      password: passwor
  });
}
