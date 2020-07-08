//mongodb://localhost:27017/employee
var express=require('express');
var pro=require('../model/product_model');
var router=express.Router();
var multer=require('multer');
 var path=require('path');
 var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'public/images/product')
    },
    filename:(req,file,cb)=>{
      x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
      cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
  });

  var multer=require('multer');
  var path=require('path');
  var storage=multer.diskStorage({
     destination:(req,file,cb)=>{
       cb(null,'public/images/product')
     },
     filename:(req,file,cb)=>{
       x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
       cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
     }
   });
   var upload=multer({storage:storage});
 router.post('/',upload.single('image'),function(req, res) {
     console.log(req.body)
     console.log(req.file.filename)
     let promodel=new pro(
        {
            product_name:req.body.product_name,
            product_img:req.file.filename,
            product_price:req.body.product_price,
            fk_cat_id:req.body.fk_cat_id,
            product_qty:req.body.product_qty,
            product_mfg:req.body.product_mfg,
          
        });
    //  promodel.save()
    //  .then(doc=>{
    //      res.send(doc);
    //  })
    //  .catch(err=>{
    //      res.send(err);
    //  })
    promodel
        .save()
        .then(picture => {
            console.log(promodel);
            res.status(201).json({
                picture: 'Added successfully',
                product_name:promodel.product_name,
                product_img: promodel.product_img, //id as in req.file.filename
                product_price: promodel.product_price, //missing
                fk_cat_id: promodel.fk_cat_id ,//missing
                product_qty:promodel.product_qty,
                product_mfg:promodel.product_mfg
            });
        })

 });
 
 




  router.get('/',(req,res)=>{
    pro.find()
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    });
});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    pro.find({"product_id":req.params.id})                  //productbyid
    .then(doc=>{
        res.send(doc);
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
 
});
// */
// router.post('/',(req,res)=>{
//     console.log(req.body)
//     let promodel=new pro(req.body);
//     promodel.save()
//     .then(doc=>{
//         res.send(doc);
//     })
//     .catch(err=>{
//         res.send(err);
//     })
// });
// router.post('/', (req, res) => {
//     const sharp = require('sharp');
//     const fs = require('fs');
//     const folderImg = 'public/images/product';
//     console.log(JSON.stringify(req.body));
//     console.log(req.file);
//     res.send("ok");    
//   });
router.delete('/:id',(req,res)=>{
    if(req.params.id){
        pro.remove({"_id":req.params.id})
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("kai be");
   }
});    
router.put('/:id',(req,res)=>{
    if(req.params.id){                                                                  //updatewithout image
        pro.update({"product_id":req.params.id},req.body)
        .then(doc=>{
            res.send(doc);
        })
    }
   else{
       res.send("kai be");
   }
});    


module.exports=router;