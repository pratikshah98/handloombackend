//mongodb://localhost:27017/employee
var express=require('express');
var bill=require('../model/bill_model');
var user=require('../model/user_model');

var router=express.Router();
// router.get('/',(req,res)=>{
//     bill.find()
//     .then(doc=>{
//         res.send(doc);
//     })
//     .catch(err=>{
//         res.send(err);
//     });
// });
router.get('/',(req,res)=>{
    bill.aggregate([
        
           {
            
                $lookup:
            {
                from:"users",
                localField:"fk_email_id",
                foreignField:"email_id",
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
    let billmodel=new bill(req.body);
    billmodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
});
router.delete('/:id',(req,res)=>{
    if(req.params.id){
        bill.remove({"bill_id":req.params.id})
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("kai be");
   }
});    
// router.put('/:id',(req,res)=>{
//     if(req.params.id){
//         cat.update({"cat_id":req.params.id},req.body)
//         .then(doc=>{
//             res.send(doc);
//         })
//     }
//    else{
//        res.send("kai be");
//    }
// });    


module.exports=router;