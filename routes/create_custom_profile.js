const fs = require('fs');
let Email;

fs.readFile('./DATA.txt', 'utf8', (err, data) => {
if (err) {
 console.error(err);
 return;
}
console.log(data + "xxxxxxxxx");
Email=data;
});




var express = require('express');
var router = express.Router();
var db=require('./database');
router.get('/form', function(req, res, next) { 
res.render('create_custom_profile'); 
});




router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userProfile=req.body.profile;
  const userObjective=req.body.objective;
  const userAbout=req.body.about;
  const usersSkill=req.body.skill;
   
  const userExper=req.body.experience;
  const userAchievement=req.body.achievement;
  

        // insert user data into users table
      var sql = 'INSERT INTO custom_profile (email,profile_name,objective,about,skill,experience,achievement) values (?,?,?,?,?,?,?)';
      db.query(sql,[Email, userProfile,userObjective,userAbout,usersSkill,userExper,userAchievement], function(err, em1,em2,em3,em4,em5,em6,em7) { 
    
      if (err) throw err;
      console.log("Successful");
      
    res.redirect('/user_dashboard?result='+Email);

      });
 
 //res.redirect('/');  // redirect to user form page after inserting the data
}); 
module.exports = router;