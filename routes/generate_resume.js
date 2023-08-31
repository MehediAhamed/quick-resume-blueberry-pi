var express = require('express');
var router = express.Router();
var db=require('./database');

var session = require('express-session');
const app=express();

// Set up session middleware
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
  }));

router.get('/form', function(req, res, next) { 
res.render('generate_resume'); 
});



router.post('/create', function(req, res, next) {
  
  
    // store all the user input data
    const userProfile=req.body.profile;
 
    const userType=req.body.profile_type;
    
    const result=[userProfile,userType];
    
    // req.session.user={profile:userProfile,utype:userType};

    res.redirect('/cv1?result='+userProfile+'& Type='+userType);

       
  });
  // redirect to user form page after inserting the data
//}); 
module.exports = router;