const express = require('express');
const userRoutes = express.Router();
const {signup,signin}=require('../controller/usersController');

userRoutes.post("/signin",signin);

userRoutes.post("/signup",signup);


module.exports =userRoutes;
 