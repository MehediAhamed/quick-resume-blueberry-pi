var express = require('express');
var router = express.Router();
var db=require('./database');
//router.get('/form', function(req, res, next) { 
res.render('cv1'); 




router.get('/cv1', function(req, res, next) {
  console.log(req.query.result);
  
  //console.log(data);



//   // insert user data into users table
//   var sql = 'select * from registration where email = ? and password = ?';
//   // const sessionStorage = require('node-sessionstorage');
//   // sessionStorage.setItem("thisOne", userEmail);


//   db.query(sql, [userEmail, userPassword], function(err, results, fields) { 
    

//       if (err) throw err;
        

//       if (results.length > 0) {
//         console.log('Login successful');
//         res.redirect('/user_dashboard');

//       } else {
//         let alert = require('alert');
//         alert("Unsuccessful");
//         console.log('Unsuccessful');
//         res.redirect('/login');
//       }
//   });
  // redirect to user form page after inserting the data
}); 
module.exports = router;