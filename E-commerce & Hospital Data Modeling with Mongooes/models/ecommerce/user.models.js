import mongooes from 'mongoose';

const userSchema = new mongooes.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

// When set to true, the mongoose creates two fields as follows: createdAt: Date representing when the document was created. updatedAt: Date representing when this document was last updated.

export const User = mongooes.model('User', userSchema);
