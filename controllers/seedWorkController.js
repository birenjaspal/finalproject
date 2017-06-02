
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var Work = require('../models/workauthorizations.js');

var newWork =  [{
  title: "Apollo",
  chargecode: "B123-1234-12345",
  allocationname: "John",
  allocationhours: 160,
  allocationrate: 120,
  allocationdate: "2017-06-15T04:00:00Z",
  hoursburned: 160
},
{
  title: "Apollo",
  chargecode: "B123-1234-12345",
  allocationname: "David",
  allocationhours: 40,
  allocationrate: 230,
  allocationdate: "2017-06-15T04:00:00Z",
  hoursburned: 13
},
{
  title: "Apollo",
  chargecode: "B123-1234-12345",
  allocationname: "Brian",
  allocationhours: 160,
  allocationrate: 150,
  allocationdate: "2017-06-15T04:00:00Z",
  hoursburned: 123
},
{
  title: "Apollo",
  chargecode: "B123-1234-12345",
  allocationname: "Lisa",
  allocationhours: 120,
  allocationrate: 110,
  allocationdate: "2017-06-15T04:00:00Z",
  hoursburned: 120
},

{
  title: "Cold Fusion",
  chargecode: "B987-6543-21234",
  allocationname: "Cindy",
  allocationhours: 40,
  allocationrate: 240,
  allocationdate: "2017-05-15T04:00:00Z",
  hoursburned: 33
},

{
  title: "Cold Fusion",
  chargecode: "B987-6543-21234",
  allocationname: "Sarah",
  allocationhours: 15,
  allocationrate: 80,
  allocationdate: "2017-05-15T04:00:00Z",
  hoursburned: 12
},

{
  title: "Cold Fusion",
  chargecode: "B987-6543-21234",
  allocationname: "Brian",
  allocationhours: 60,
  allocationrate: 120,
  allocationdate: "2017-05-15T04:00:00Z",
  hoursburned: 60
},

{
  title: "Mercury",
  chargecode: "B275-7234-92383",
  allocationname: "Cindy",
  allocationhours: 80,
  allocationrate: 172,
  allocationdate: "2017-08-15T04:00:00Z",
  hoursburned: 65
},

{
  title: "Mercury",
  chargecode: "B275-7234-92383",
  allocationname: "Sarah",
  allocationhours: 80,
  allocationrate: 163,
  allocationdate: "2017-08-15T04:00:00Z",
  hoursburned: 23
},

{
  title: "Stratos",
  chargecode: "B337-7643-57442",
  allocationname: "David",
  allocationhours: 60,
  allocationrate: 212,
  allocationdate: "2017-09-15T04:00:00Z",
  hoursburned: 57
},

{
  title: "Stratos",
  chargecode: "B337-7643-57442",
  allocationname: "Lisa",
  allocationhours: 200,
  allocationrate: 120,
  allocationdate: "2017-09-15T04:00:00Z",
  hoursburned: 200
},

{
  title: "Stratos",
  chargecode: "B337-7643-57442",
  allocationname: "Brian",
  allocationhours: 80,
  allocationrate: 90,
  allocationdate: "2017-09-15T04:00:00Z",
  hoursburned: 72
},

{
  title: "Stratos",
  chargecode: "B337-7643-57442",
  allocationname: "Sarah",
  allocationhours: 100,
  allocationrate: 110,
  allocationdate: "2017-09-15T04:00:00Z",
  hoursburned: 20
},

{
  title: "Orion",
  chargecode: "B634-8452-84234",
  allocationname: "David",
  allocationhours: 40,
  allocationrate: 170,
  allocationdate: "2017-10-15T04:00:00Z",
  hoursburned: 40
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
