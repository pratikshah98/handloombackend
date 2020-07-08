const mongoose=require('../dbconnection');
const proschema= mongoose.Schema({
// "product_id":
// {
//     type:Number,
//     required:true
// },
// "product_name":
// {
//     type:String,
//     required:true
// },   
// "product_img":
// {
//     type:String,
//     required:true
// },   
// "product_price":
// {
//     type:Number,
//     required:true
// },   
// "product_qty":
// {
//     type:Number,
//     required:true
// },   

// "fk_cat_id":
// {
//     type:Number,
//     required:true
// },   
// "product_mfg":
// {
//     type:Number,
//     required:true
// },   
// "product_desc":
// {
//     type:String,
//     required:true
// },   
// "product_color":
// {
//     type:String,
//     required:true
// },
"product_id":Number,
"product_name":String,
"product_img":String,
"product_price":Number,
"product_qty":Number,
"fk_cat_id":Number,
"product_mfg":String,
"product_desc":String,
"product_color":String,


});

module.exports=mongoose.model('products',proschema);
