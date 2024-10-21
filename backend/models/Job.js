const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title:{
        type:string,
        required:true,
    },
    description: {
        type: String,
        required: true,
      },
      experienceLevel: {
        type: String,
        required: true,
      },
      candidates: [
        {
          email: {
            type: String,
            required: true,
          },
        },
      ],
      endDate: {
        type: Date,
        required: true,
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },

    },{timestamps:true})

export const Job = mongoose.model("Job",JobSchema)