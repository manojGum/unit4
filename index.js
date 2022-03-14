// https://course.masaischool.com/assignments/10274/problem/25229
const express=require("express");

// const { connect } = require("http2");
const mongoose=require("mongoose");
// const { stringify } = require("querystring");
const app=express();
app.use(express.json);
const connect=()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/bankingsystems");
};
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    middleName:{type:String, required:false},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:Number,required:true},
    address:{type:Number,required:true},
    gender:{type:String,required:false}

},{
    timestamps:true,
});
// create the model
const User=mongoose.model("user",userSchema);

// create the Schema
const BranchDetail=new mongoose.Schema({

    
    
   name:{type:String,required:true},
  ADDRESS:{type:String,required:true}, 
    IFSC:{type:String,required:true},
    MICR:{type:Number,required:true},
    },{
    timestamps:true,
});
// create the model
const Branch=mongoose.model("BranchDetails",BranchDetail); 



// create the Schema

const MasterAccount =new mongoose.Schema({
    account_number:{type:String,required:true,unique:true},
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      
   
    },{
    timestamps:true,
});
// create the model
const Master=mongoose.model("MasterAccount",MasterAccount);





// create the Schema

const SavingsAccount =new mongoose.Schema({
    balance:{type:String,required:true},
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:" MasterAccount",
        required: true,
      },
      
   
    },{
    timestamps:true,
});
// create the model
const Savings=mongoose.model("SavingsAccount",SavingsAccount);










app.listen(5000,async()=>{
    try{
        await connect();
    }catch(err){
        console.log(err);
    }
})