
const userModelOject = require('../models/userModel');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res)=>{
       
     console.log(req.body);
     
      
    
    const userData = {name: req.body.name,
                      email: req.body.email,
                      password: req.body.password
    }
       
    

    userModelOject.registerUser(userData, (err,result)=>{
        // from here we will start from tomorrow;

        // 7/10/2024 start working from here

        if(err){
           return  res.status(500).json({message: 'Err  Occurred in db can not get registered'})
        }
           res.status(201).json({message:'Registered Succesfully'});
    });
};

module.exports = {
    registerUser
};

