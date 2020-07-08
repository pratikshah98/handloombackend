const mongoose=require('../dbconnection');
const billschema= mongoose.Schema({
"bill_id":Number,
"date":Date,
"total_price":String,
"fk_email_id":String,

});
module.exports=mongoose.model('bills',billschema);
