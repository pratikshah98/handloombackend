//mongodb://localhost:27017/employee
var express=require('express');
var cat=require('../model/category_model');
var pro=require('../model/product_model');

var router=express.Router();


// router.get('/:name',(req,res)=>{
//  cat.aggregate([
//      {
        
         
//              $lookup:
//          {
//              from:"products",
//              localField:"cat_id",
//              foreignField:"fk_cat_id",
//              as:"JOINTABLE"
//             }},
//             {
//                 $match: { "cat_name": req.params.name }
//              },
        

//  ],function(err,docs){
//      if(err)
//      {
//          res.json(err);
//      }
//      else{
//          res.json(docs);
//          console.log(docs);
//      }
//  })  
 
// });


router.get('/:name',(req,res)=>{
    pro.aggregate([
        
           {
            
                $lookup:
            {
                from:"categorys",
                localField:"fk_cat_id",
                foreignField:"cat_id",
                as:"JOINTABLE",
               
            }
        },
            { $match: { "JOINTABLE.cat_name": req.params.name } },
    
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
            console.log(docs);
        }
    })  
    
   });

module.exports=router;