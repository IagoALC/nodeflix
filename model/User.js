import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {type: String},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

const user = mongoose.model('user', userSchema);

export default user;