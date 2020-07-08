//mongodb://localhost:27017/employee
var express=require('express');
var billdetail=require('../model/billldetail_model');
var product=require('../model/product_model');

var router=express.Router();
// router.get('/',(req,res)=>{
//     billdetail.find()
//     .then(doc=>{
//         res.send(doc);
//     })
//     .catch(err=>{
//         res.send(err);
//     });
// });

router.get('/:id',(req,res)=>{
    
    billdetail.aggregate([
        { $match: {fk_bill_id: parseInt(req.params.id) }
        
    
    },           
            {
                $lookup:
                 {
                     
                                from:"products",
                                localField:"fk_product_id",
                                foreignField:"product_id",
                                as:"JOINTABLE",
                }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$JOINTABLE", 0 ] }, "$$ROOT" ] } }
             },
             { $project: { JOINTABLE: 0 } }
            
             
    ],function(err,docs){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(docs);
        //    console.log(docs);
        }
    })  
    
   });

router.post('/',(req,res)=>{
    let billdetailmodel=new billdetail(req.body);
    console.log(req.body);
        billdetailmodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
});


module.exports=router;