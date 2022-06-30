import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const categories = mongoose.model('categories', categoriesSchema);

export default categories;