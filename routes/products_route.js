var express = require("express");
var router = express.Router();
var products = require("../model/product_model");
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
router.post('/',upload.single('image'),function(req, res, next) {
    var productsmodel=new products(req.body,req.file.filename);
    productsmodel.save()
  
    .then(doc=>{
        res.send(doc);
    })
    .catch(err=>{
        res.send(err);
    })
  });
  

  
  module.exports = router;