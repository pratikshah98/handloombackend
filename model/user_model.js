const mongoose=require('../dbconnection');
const userschema= mongoose.Schema({

"user_id":Number,
"user_name":String,
"email_id":String,
"password":String,
"gender":String,
"phoneno":String,
"city":String,


});
module.exports=mongoose.model('users',userschema);
