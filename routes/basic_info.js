var express = require('express');
var router = express.Router();
var db=require('./database');
router.get('/form', function(req, res, next) { 
res.render('basic_info'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userEmail=req.body.email;
 
  const userPassword=req.body.password;
  console.log(userEmail);
      console.log(userPassword);


       // store all the user input data
  
    
    // req.session.user={profile:userProfile,utype:userType};



  const fs = require('fs');

  const content = userEmail;
      
  fs.writeFile('./DATA.txt', content, err => {
        if (err) {
          console.error(err);
        }
        
   });

 

  // insert user data into users table
  var sql1 = 'select * from registration where email = ?';


  db.query(sql1, userEmail, function(err, results) { 
    
     


      if (err) throw err;
        

      if (results.length <= 0) {
      
        const userDetails=req.body;

           // insert user data into users table
      var sql = 'INSERT INTO registration SET ?';
      db.query(sql,userDetails, function(err, data) { 
    
      if (err) throw err;
      console.log("Successful");
      
      res.redirect('/user_dashboard?result='+userEmail);
      //res.redirect('/user_dashboard');

      });
     
      
     
      } else {
        let alert = require('alert');
        alert("Unsuccessful");
        console.log('Unsuccessful');
        res.redirect('/basic_info')
      }
  });
 
 
 //res.redirect('/');  // redirect to user form page after inserting the data
}); 
module.exports = router;