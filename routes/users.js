const express=require('express');
const router=express.Router();
const config=require("../config/database");
const Employee=require('../models/EmployeeSchema');


router.get('/home',function(req,res){
    res.send("hello home");

})



router.get('/getdata',function(req,res){
    Employee.find(function(err,data){
        if(err){
            console.log(err);
        }else{
          console.log(data);
            res.json(data);
        }
    })
})


router.post('/register',function(req,res){
    let employee=new Employee();
       employee.name=req.body.name;
        employee.email=req.body.email;
        employee.password=req.body.password;
    console.log(req.body);
    employee.save(function(err,employee){
        if(err){
            console.log(err);
        }
        res.json({success:true,msg:"inserted data "});
        res.send(employee);
        console.log(employee);
    });
});

module.exports=router;