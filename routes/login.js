var express = require('express');
var router = express.Router();
var db=require('./database');
router.get('/form', function(req, res, next) { 
res.render('login'); 
});



router.post('/create', function(req, res, next) {
  
  
  const userEmail=req.body.email;
  const userPassword=req.body.password;
  
  
  
  const fs = require('fs');

  const content = userEmail;
      
  fs.writeFile('./DATA.txt', content, err => {
        if (err) {
          console.error(err);
        }
        
   });



  // insert user data into users table
  var sql = 'select * from registration where email = ? and password = ?';
  // const sessionStorage = require('node-sessionstorage');
  // sessionStorage.setItem("thisOne", userEmail);


  db.query(sql, [userEmail, userPassword], function(err, results, fields) { 
    

      if (err) throw err;
        

      if (results.length > 0) {
        console.log('Login successful');

         // store all the user input data
    const userEmail=req.body.email;
 
   
    
    // req.session.user={profile:userProfile,utype:userType};

      res.redirect('/user_dashboard?result='+userEmail);

        

      } else {
        let alert = require('alert');
        alert("Unsuccessful");
        console.log('Unsuccessful');
        res.redirect('/login');
      }
  });
  // redirect to user form page after inserting the data
}); 
module.exports = router;