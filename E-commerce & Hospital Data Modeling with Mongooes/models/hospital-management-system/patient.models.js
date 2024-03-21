import mongooes from 'mongoose';

const patientSchema = new mongooes.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"],
    required:true
  },
  address:{
    type:String,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  diagonosedWith:{
    type:String,
    required:true
  },
  admittedIn:{
    type:mongooes.Schema.Types.ObjectId,
    ref: 'Hospital'
  },
}, { timestamps: true });

export const Patient = mongooes.model('Patient', patientSchema);
