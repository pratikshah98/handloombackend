//mongodb://localhost:27017/employee
var express=require('express');
var user=require('../model/user_model');
var router=express.Router();
router.get('/',(req,res)=>{
    user.find()
    .then(doc=>{
        res.send(doc);                                              //getalluser
    })
    .catch(err=>{
        res.send(err);
    });
});

router.get('/:email_id',(req,res)=>{
    user.find({"email_id":req.params.email_id})
    .then(doc=>{
        res.send(doc);
        console.log(doc);
    })
    .catch(err=>{
        res.send(err);                                                                  //viewprofile
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
    let usermodel=new user(req.body);                     
    usermodel.save()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
});
router.delete('/:id',(req,res)=>{
    if(req.params.id){
        user.remove({"user_id":req.params.id})
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("incorrect id..");
   }
});

router.put('/',(req,res)=>{
        user.update(req.body)
        .then(doc=>{
            res.send(doc);                  //change password
        })
    
   
}); 

router.put('/:id',(req,res)=>{
    if(req.params.id){
        user.update({"email_id":req.params.id},req.body)
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("Incorrect Id...");                             //editprofile
   }
});    


module.exports=router;