const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const path=require('path');
const cors = require('cors');
// const config=require("./config/database");
const Employee=require("./models/EmployeeSchema");
var app=express();
var user=require('./routes/users');
var port=3000;

// mongoose.connect(config.database);
// mongoose.connection.on("connected",()=>{
//     console.log("succesfully connected"+config.database);
// });

mongoose.connect("mongodb://bainapalli:sankar@ds249299.mlab.com:49299/sankar",function(err,res){
    if(err) throw err;
    console.log("database connected");
});

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',user);

app.get('/',function(req,res){
    res.send("hello app");
})

app.use(cors());

app.listen(port,function(){

    console.log("server started at port 3000");

})