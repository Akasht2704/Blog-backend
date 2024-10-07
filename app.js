  
 const express = require('express');
 const multer = require('multer');
  
 const bodyParser = require('body-parser');

 const userRoutes = require('./routes/userRoutes');
 const cors = require('cors');

 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 const upload = multer();
app.use(upload.none());

 require('dotenv').config();

 const  port = process.env.PORT||3000;

  app.use(bodyParser.json());
  app.use(cors());

  app.use('/api',userRoutes)

  app.listen(port,()=>{
    console.log(`SERVER IS RUNNING ON HTTP LOCALHOST ON PORT ${port}`);
    
  });

