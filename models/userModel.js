import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, },
    email: { type: String,},
    password: { type: String,},
    phone: { type: String,},
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
