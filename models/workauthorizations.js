var mongoose = require('mongoose');

var workauthorizationSchema = mongoose.Schema({
    title: String,
    chargecode: String,
    allocationname: String,
    allocationhours: Number,
    allocationrate: Number,
    // allocation: [{name: String, hours: Number, rate: Number}]
    allocationdate: Date,
    hoursburned: {type: Number, default: 0}
});

var Workauthorization = mongoose.model('Workauthorization', workauthorizationSchema);


//uncomment the following code to populate, then recomment
// var transceiverData = require('../populateWorkauthorization.js');
// console.log(transceiverData);
// Transceiver.collection.insertMany( transceiverData,
//   function( err, data ) {
//     console.log( "added provided transceiver data" );
//     mongoose.connection.close();
//   }
// );

module.exports = Workauthorization;
