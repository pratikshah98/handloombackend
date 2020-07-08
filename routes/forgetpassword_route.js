// var express=require('express');
// var user=require('../model/user_model');
// var router=express.Router();

// router.post('/',(req,res)=>{
//     let usermodel=new user(req.body);                     
//     usermodel.save()
//     .then(doc=>{
//         res.send(doc);
//     })
//     .catch(err=>{
//         res.send(err);
//     })
// });
var express = require("express");
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/',function(req,res,next){

    console.log(req.body);

        var transporter = nodemailer.createTransport({
    
            service: 'gmail',
          
            auth: {
          
              user: 'pratikshah012325@gmail.com',
          
              pass: 'Pratik@12325@'
          
            }
          
          });
          
           
          
          var mailOptions = {
          
            from: 'pratikshah012325@gmail.com',
          
            to: req.body.email_id,
          
            subject:'ABOUT FORGET PASSWORD',
          
            //text:rows[i].itemId,
            html:
            '<h4>YOUR PASSWORD IS :'+ req.body.password +'</h4>'
            // '<table style="border:1px solid black; padding:20px; margin:20px;"> '+
            // '<tr>'+
            // '<th>  ITEM NAME      <th>'+
            // '<th>  ITEM QUANTITY  <th>'+
            // '</tr>'+

            // '<tr>'+
            // '<th>'+ rows[i].name          +'</th>'+'&nbsp;&nbsp;&nbsp;'+
            // '<th>'+ rows[i].stockQuantity +'</th>'+
            
            // '</tr>'+
            // '</table>'
            
          };
          
           
          
          transporter.sendMail(mailOptions, function(error, info){
          
            if (error) {
          
              console.log(error);
          
            } else {
          
              console.log('Email sent: ' + info.response);
          
            }
          
          });
              
           
        });
  




module.exports=router;