
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var User = require('../models/users.js');

var newUser =  [{
  username: "John",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "john@gmail.com",
  img: "http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg",
  role: "consultant"
},

{
  username: "David",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "david@gmail.com",
  img: "http://glory4cars.com/wp-content/uploads/pics/MAN/MAN-8.jpg",
  role: "pm"
}];

router.get('/', function(req, res) {
  console.log("debugger");
	User.create(newUser, function(err) {
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
