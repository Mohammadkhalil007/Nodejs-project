const express = require('express');
const app = express();
const port = 3000;
/*connecting roters to index file *******/
const userrouters=require('./routes/userRoutes');
// const notesRoute=require('./routes/notesRoutes');
/* Database connectivity of Mongooes which is NOSQL DataBase****/
const mongoose=require('mongoose');
/* change the admin:password which is take as default admin so it will change when you create a database connection*********/
mongoose.connect("mongodb+srv://admin:admin@cluster0.49pbacc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
   app.listen(port, () => {
      console.log("--Mongo Database is working--");
      console.log(`Server is Running at port : ${port}`);
      console.log("--------------------------------------");
    })
}) 
.catch((error) => {
console.log(error);   
})

app.use(express.json());
/*users All Routes ********************************/
app.use("/users",userrouters);
/*notes All Routes ********************************/
// app.use("/notes",notesRoute);

