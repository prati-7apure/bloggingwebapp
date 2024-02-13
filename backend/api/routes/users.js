const express = require('express');
const router = express.Router();
router.post('/register', function(req, res, next) {
 
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: hash,
    role:'Author'
    
  });
 
  userDetails.save().then(doc=>{
    res.status(201).json({
        message:"Inserted Successfully",
        results:doc
    });
})
.catch(err=>{
    res.json(err);
});
  
});
router.post("/login",function(req,res,next){
 
  var email=req.body.Email;
  userModel.find({email:email})
  .exec()
  .then(user=>{
      if(user.length<1){
          res.status(200).json({
            msg:"Auth Failed",
            UserData:'',
            status:'error'
          });
      }else{
          bcrypt.compare(req.body.Password, user[0].password, function(err, result) {
             if(err){
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
             if(result){
              res.status(200).json({
                msg:"User Login Successfully",
                  UserData:user,
                  status:'success'
              });
             }else{
              res.json({
                msg:"Auth Failed",
                UserData:'',
                status:'error'
              });
             }
          });
      
  }
  })
  .catch(err=>{
      res.json({
          error:err
      });
  })
 
 
  });
module.exports = router;