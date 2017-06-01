
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var Work = require('../models/workauthorizations.js');

var newWork =  [{
  title: "Project1",
  chargecode: "B123-1234-12345",
  allocationname: "John",
  allocationhours: 160,
  allocationrate: 120,
  allocationdate: "2017-06-15T04:00:00Z",
  hoursburned: 0
},

{
  title: "Project2",
  chargecode: "B987-6543-21234",
  allocationname: "David",
  allocationhours: 40,
  allocationrate: 220,
  allocationdate: "2017-05-15T04:00:00Z",
  hoursburned: 0
}];

router.get('/', function(req, res) {
  console.log("debugger");
	Work.create(newWork, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/')
		}
	});
});

module.exports = router;
