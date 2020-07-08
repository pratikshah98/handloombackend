const mongoose=require('../dbconnection');
const billdetailschema= mongoose.Schema({
"billdetail_id":Number,
"fk_bill_id":Number,
"product_img":String,
"product_name":String,
"product_price":String,
"product_qty":Number,

});
module.exports=mongoose.model('billdetails',billdetailschema);
