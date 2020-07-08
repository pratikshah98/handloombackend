const mongoose=require('../dbconnection');
const billdetailschema= mongoose.Schema({
"billdetail_id":Number,
"fk_bill_id":Number,
"fk_product_id":Number,
"qty":Number,
"price":Number
});
module.exports=mongoose.model('billdetails',billdetailschema);
