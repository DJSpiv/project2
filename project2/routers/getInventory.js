var express = require('express')
, router = express.Router();

var db=require("../database.js");

router.get("/getMenuItems", function(req, res){
	var collection = db.getDb().collection('inventory');
	collection.find().toArray(function(err, docs){
	res.json(docs);
	})
})
module.exports = router;