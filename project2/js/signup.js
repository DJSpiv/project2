var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://storeAdmin:storePass@localhost:27017/users';


var insertDocument = function(db, callback) {
   db.collection('users').insertOne( {
      "name": document.getElementByID("name");
      "email": document.getElementByID("mail");
      "pwd": document.getElementByID("pass");
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});