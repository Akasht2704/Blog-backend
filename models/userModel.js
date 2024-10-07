const db = require('../config/db');
  
//Register user



 const registerUser = (userData, callback)=>{
    const username = userData.name;
    const email = userData.email;
    const password = userData.password;

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

     
    db.query(sql, [username, email, password ], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return callback(err);
      }
      callback(null, result);});
 }
   
   
   
 module.exports = {
    registerUser
 }