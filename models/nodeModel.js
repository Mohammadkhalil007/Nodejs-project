const mongoose=require('mongoose');

/*defing schema which type of record we will store in database*********/
const noteSchema=mongoose.Schema({
    /*these are required things username,email, password and these object take their type****/
    title:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string',
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true
    }
/*at the end we use timestamp for maintaining the record in database with time.********/ 
},{timestamps:true});


module.exports=mongoose.model("noteModel",noteSchema);