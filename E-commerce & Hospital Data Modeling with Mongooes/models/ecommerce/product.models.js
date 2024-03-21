import mongooes from 'mongoose';

const productSchema = new mongooes.Schema({
  description:{
    type:String,
    required: true,
  },
  name:{
    type:String,
    required: true,
  },
  price:{
    type: Number,
    default:0
  },
  productImage:{
    type: String
  },
  stock:{
    type: Number,
    default: 0
  },
  category:{
    type: mongooes.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  owner:{
    type: mongooes.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export const Product = mongooes.model('Product', productSchema);
