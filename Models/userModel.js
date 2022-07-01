const moongoose = require("moongoose");
const Schema = moongoose.Schema;

const userSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    bday : {
        type : Date,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    ispremium : {
        type : Boolean,
        required : true
    },
    },
    
    { 
        timestamps : true

});

const User = moongoose.model("User", userSchema);
module.exports = User;