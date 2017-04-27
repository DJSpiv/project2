'use strict';
var MongoClient = require('mongodb').MongoClient
var inventory=null;

exports.connect = function(url, callback) {
  if (inventory) return callback();
  MongoClient.connect(url, function(err, db) {
    if (err) return callback(err);
    inventory = db;
    callback();
  })
}
exports.close = function(callback) {
  if (inventory) {
    inventory.close(function(err, result) {
      inventory = null;
      callback(err)
    })
  }
}
exports.getDb = function() {
  return inventory;
}