
// 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
const userModels=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwtToken=require("jsonwebtoken");
const  SECRETKEY="Khalil";



const signup = async (req,res) =>{
 /*check for existing user ********/
 //user creation ********/
       const {username, email, password} = req.body;
         //existing user ********/
       try{
        /*userModels check that is record is exist in database or not************/
          const existingUser=await userModels.findOne({email: email});
          if(existingUser){
            return res.status(400).json({message: "User already exists"});
          }
           //hashed password by using bcrypt library********/
          const haspassword = await bcrypt.hash(password,10);
           //user creation ********/
           const result=await userModels.create({
            email: email,
            password: haspassword,
            username: username
        });
           //token generate using JsonWebToken****we pass two thingsin sign(payload, secret)****/
        const token=jwtToken.sign({email:result.email, id:result._id },SECRETKEY)
          res.status(201).json({user:result, token:token})
       }catch(error){
     console.log(error);
     res.status(500).json({message:"server issue"});
           }
}



const signin = async (req,res) => {
    const {email, password} = req.body;
    try{
        /*userModels check that is record is exist in database or not************/
          const existingUser=await userModels.findOne({email: email});
          if(!existingUser){
            return res.status(404).json({message: "User not Exist"});
          }
          const passwordMactch=await bcrypt.compare(password,existingUser.password)
          if(!passwordMactch){
            return res.status(400).json({message: "invalid credentials"});
          }
        //token generate using JsonWebToken****we pass two thingsin sign(payload, secret)****/
        const token=jwtToken.sign({email:existingUser.email, id:existingUser._id },SECRETKEY)
          res.status(201).json({user:existingUser, token:token})
       }catch(error){
     console.log(error);
     res.status(500).json({message:"server issue"});
           }
}

module.exports={
    signup,
    signin
}