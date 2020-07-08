const mongoose=require('../dbconnection');
const catschema= mongoose.Schema({
"cat_id":Number,
"cat_name":String,

});
module.exports=mongoose.model('categorys',catschema);
