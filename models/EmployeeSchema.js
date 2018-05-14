

const mongoose=require('mongoose');
const config=require("../config/database");
// const Schema=mongoose.Schema;

const EmployeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    
   
    },
    email:{
        type:String ,
        required:true  
    },
    password:{
        type:String,
        required:true

   
    }

});

const Employee=module.exports=mongoose.model('Employee',EmployeeSchema);
