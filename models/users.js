var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    username: String,
    password: String,
    email: String,
    img: String,
    role: String
});

var User = mongoose.model('User', userSchema);

//uncomment the following code to populate, then recomment
// var userData = require('../populateUsers.js');
// console.log(userData);
//
// User.collection.insertMany( userData,
//   function( err, data ) {
//     console.log( "added provided user data" );
//     mongoose.connection.close();
//   }
// );

module.exports = User;
