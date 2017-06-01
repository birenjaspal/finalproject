var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var Users = require('../models/users.js');
var Workauthorizations = require('../models/workauthorizations.js');



//////////////////////////Workauthorization Routes/////////////////////////////////////
//get route for creating new workauthorization
router.get('/workauthorizations/newworkauthorization', function(req, res){
  if(req.session.currentuser){
    res.render('workauthorizations/new.ejs', {
      currentUser: req.session.currentuser
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});

//post route for creating new workauthorization
router.post('/workauthorizations', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.create(req.body, function(){
        res.redirect('workauthorizations/index');
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});


//get route for displaying index of workauthorizations
router.get('/workauthorizations/index', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.find({}, function(error, allWorkauthorizations){
        res.render('workauthorizations/index.ejs', {
            workauthorizations: allWorkauthorizations,
            currentUser: req.session.currentuser
        });
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});

router.get('/myauthorizations/index', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.find({}, function(error, allWorkauthorizations){
        res.render('myauthorizations/index.ejs', {
            workauthorizations: allWorkauthorizations,
            currentUser: req.session.currentuser
        });
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});

//delete route for deleting workauthorization
router.delete('/workauthorizations/deleteworkauthorization/:id', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.findByIdAndRemove(req.params.id, function(err, data){
        res.redirect('/sol/workauthorizations/index');
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});

//get route for editing workauthorization
router.get('/workauthorizations/:id/edit', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.findById(req.params.id, function(err, foundWorkauthorization){ //find the workauthorization
        res.render(
    		'workauthorizations/edit.ejs',
    		{
    			workauthorization: foundWorkauthorization, //pass in found workauthorization
          currentUser: req.session.currentuser
    		});
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});



//put route for editing workauthorization
router.put('/workauthorizations/:id', function(req, res){
  if(req.session.currentuser){
    //{new: true} tells mongoose to send the updated model into the callback
    Workauthorizations.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedModel){
        res.redirect('/sol/workauthorizations/index');
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});

//get route for showing workauthorization detail
router.get('/workauthorizations/:id', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.findById(req.params.id, function(err, foundWorkauthorization){
        res.render('workauthorizations/show.ejs', {
            workauthorization: foundWorkauthorization,
            currentUser: req.session.currentuser
        });
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});


///////////////////////////////////////////////////////////
//User Route
router.post('/', function(req, res){
    Users.create(req.body, function(){
        res.redirect('workauthorizations/index');
    });
});

//get route for displaying map
// router.get('/map', function(req, res){
//   if(req.session.currentuser){
//     workauthorizations.find({}, function(error, allworkauthorizations){
//       res.render('map/footprintmap.ejs', {
//         workauthorizations: allworkauthorizations,
//         currentUser: req.session.currentuser
//       });
//     });
//   } else {
//     res.render('sessions/tryagain.ejs');
//   }
// });
router.get('/dashboard/dashboard', function(req, res){
  if(req.session.currentuser){
    Workauthorizations.find({}, function(error, allWorkauthorizations){
        res.render('dashboard/dashboard.ejs', {
            workauthorizations: allWorkauthorizations,
            currentUser: req.session.currentuser
        });
    });
  } else {
    res.render('sessions/tryagain.ejs');
  }
});


module.exports = router;
