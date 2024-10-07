//Jai Shree Ram Shree Ganeshay Namah:
const mysql = require('mysql2');


const db = mysql.createConnection({

      host: 'localhost',
      user: 'root',
      password: '',
      database:'blogging-website-database' 

});

db.connect((err)=>{
    if(err){
        console.log('Database connection Failed',err.stack);
        return;
    }
    console.log('Connected Secured to Database'); 
});

module.exports = db;