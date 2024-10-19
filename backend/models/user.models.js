import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
              type:String,
              required:true,
              unique:true,
              lowercase:true
        },
        phonenumber:{
              type:Number,
              required:true,
              unique:true,
        },
        companyname:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
      },
        companyemail:{
              type:String,
              required:true,
              unique:true,
              lowercase:true
        },
        employeesize:{
            type:Number,
            required:true,
           
      },
     
        
    },{timestamps:true})

export const User = mongoose.model("User",userSchema)