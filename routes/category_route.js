//mongodb://localhost:27017/employee
var express=require('express');
var cat=require('../model/category_model');
var router=express.Router();
router.get('/',(req,res)=>{
    cat.find()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

router.get('/:id',(req,res)=>{
    cat.find({"cat_id":req.params.id})
    .then(doc=>{
        res.send(doc);                                                          //getcategorybyid
    })
    .catch(err=>{
        res.send(err);
    });
});

/*router.get('/',(req,res)=>{
 dep.aggregate([
     {
         $lookup:
         {
             from:"emps",
             localField:"dname",
             foreignField:"dname",
             as:"JOINTABLE"
            }
        }
 ],function(err,docs){
     if(err)
     {
         res.json(err);
     }
     else{
         res.json(docs);
     }
 })  
 
});*/
router.post('/',(req,res)=>{
    let catmodel=new cat(req.body);
    console.log(req.body);
    catmodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
});
router.delete('/:id',(req,res)=>{
    if(req.params.id){
        cat.remove({"cat_id":req.params.id})
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("kai be");
   }
});    
router.put('/:id',(req,res)=>{
    if(req.params.id){
        cat.update({"cat_id":req.params.id},req.body)                           //categoryupdatebyname
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("kai be");
   }
});    


module.exports=router;