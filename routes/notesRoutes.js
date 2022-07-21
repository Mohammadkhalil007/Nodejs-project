const express = require('express');
const noteRoutes = express.Router();
const controller=require('../controller/usersController');

noteRoutes.post("/signin",controller.getAllTea);

noteRoutes.post("/signup",(req, res) => {
    res.send("signup")
});
module.exports =noteRoutes;
 