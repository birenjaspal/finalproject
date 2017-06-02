
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
},

{
  username: "Brian",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "brian@gmail.com",
  img: "http://steezo.com/wp-content/uploads/2012/12/man-in-suit2.jpg",
  role: "consultant"
},

{
  username: "Lisa",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "lisa@gmail.com",
  img: "http://www.southamericaliving.com/wp-content/uploads/2015/08/successful-business-woman.jpg",
  role: "consultant"
},

{
  username: "Sarah",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "sarah@gmail.com",
  img: "https://t4.ftcdn.net/jpg/00/67/90/29/240_F_67902901_Yapt0XPbF6yyCd7RusWFS78nrUv8WcEv.jpg",
  role: "consultant"
},

{
  username: "Cindy",
  password: bcrypt.hashSync("password", bcrypt.genSaltSync(10)),
  email: "cindy@gmail.com",
  img: "http://www.thebusinesswomanmedia.com/wp-content/uploads/2015/05/buildbusiness.jpg",
  role: "pm"
}
];

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
