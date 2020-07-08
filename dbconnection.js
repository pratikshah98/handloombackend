const mongoose=require('mongoose');
//mongodb+srv://pratikshah:pratikshah@cluster0-aukc7.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect("//mongodb://localhost:27017/handloom",{useNewUrlParser:true,useUnifiedTopology: true },function(err){
    if(err)
    {
        console.log('error');
    }
    else{
        console.log('connected');
    }
});
module.exports=mongoose;