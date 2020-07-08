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
   var upload=multer({storage:storage});
//  router.put('/:proid',upload.single('image'),function(req, res) {
//      console.log(req.body)
//      console.log(req.file.filename)
//      let promodel=new pro(
//         {
//             product_name:req.body.product_name,
//             product_img:req.file.filename,
//             product_price:req.body.product_price,
//             fk_cat_id:req.body.fk_cat_id,
//             product_qty:req.body.product_qty,
//             product_mfg:req.body.product_mfg,
            
//         });
//     //  promodel.save()
//     //  .then(doc=>{
//     //      res.send(doc);
//     //  })
//     //  .catch(err=>{
//     //      res.send(err);
//     //  })
//     promodel
//         .save()
//         .then(picture => {
//             console.log(promodel);
//             res.status(201).json({
//                 picture: 'Added successfully',
//                 product_name:promodel.product_name,
//                 product_img: promodel.product_img, //id as in req.file.filename
//                 product_price: promodel.product_price, //missing
//                 fk_cat_id: promodel.fk_cat_id ,//missing
//                 product_qty:promodel.product_qty,
//                 product_mfg:promodel.product_mfg
//             });
//         })


        router.put('/:id',upload.single('image'),(req,res)=>{
            if(req.params.id){                                                                  //updatewithout image
                 pro.update({"product_id":req.params.id},
                            {
                                product_name:req.body.product_name,
                                product_img:req.file.filename,
                                product_price:req.body.product_price,
                                fk_cat_id:req.body.fk_cat_id,
                                product_qty:req.body.product_qty,
                                product_mfg:req.body.product_mfg,
                                
                            })
                       
                         .then(doc=>{
                             res.send(doc);
                         })
                         .catch(err=>{
                             res.send(err);
                         })
                        // promodel
                        //     .save()
                        //     .then(picture => {
                        //         console.log(promodel);
                        //         res.status(201).json({
                        //             picture: 'Added successfully',
                        //             product_name:promodel.product_name,
                        //             product_img: promodel.product_img, //id as in req.file.filename
                        //             product_price: promodel.product_price, //missing
                        //             fk_cat_id: promodel.fk_cat_id ,//missing
                        //             product_qty:promodel.product_qty,
                        //             product_mfg:promodel.product_mfg
                        //         });
                        //     })


                            // router.put('/:id',(req,res)=>{
                            //     if(req.params.id){                                                                  //updatewithout image
                            //         pro.update({"product_id":req.params.id},
                            //         product_name:req.body.product_name,
                            //         product_img:req.file.filename,
                            //         product_price:req.body.product_price,
                            //         fk_cat_id:req.body.fk_cat_id,
                            //         product_qty:req.body.product_qty,
                            //         product_mfg:req.body.product_mfg,
                      
                            //         )
                            //         .then(doc=>{
                            //             res.send(doc);
                            //         })
                            //     }
                            //    else{
                            //        res.send("kai be");
                            //    }
                            // });
                    
            }
           else{
               res.send("kai be");
           }
        });    
        


 module.exports=router;