import mongoose from mongoose

const userSchema = new mongoose.schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password:{
    type: String,
    required: true
  }
})

export const User = mongoose.model("User", userSchema)