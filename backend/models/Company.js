import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        username:{
              type:String,
              required:true,
              unique:true,
              lowercase:true
        },
        phone:{
              type:Number,
              required:true,
              unique:true,
        },
        companyName:{
            type:String,
            required:true,
            unique:true,
            lowercase:true
      },
        companyEmail:{
              type:String,
              required:true,
              unique:true,
              lowercase:true
        },
        employeesize:{
            type:Number,
            required:true,
           
      },
      password: { 
        type: String,
         required: true }, 
  isEmailVerified: { 
    type: Boolean,
     default: false },
  isPhoneVerified: { type: 
    Boolean,
     default: false },
  emailOTP: { 
    type: String },        
  phoneOTP: {
     type: String },        
  createdAt: { type: Date, default: Date.now },
     
        
    },{timestamps:true})

    CompanySchema.pre('save', async function (next) {
        if (!this.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      });

export const Company = mongoose.model("Company",companySchema)