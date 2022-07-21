const mongoose=require('mongoose');

/*defing schema which type of record we will store in database*********/
const userSchema=mongoose.Schema({
    /*these are required things username,email, password and these object take their type****/
    username:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    }
/*at the end we use timestamp for maintaining the record in database with time.********/ 
},{timestamps:true});


module.exports=mongoose.model("userModel",userSchema);