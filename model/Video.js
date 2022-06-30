import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema } = pkg;

const videosSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  categories_id: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
});

const videos = mongoose.model('videos', videosSchema);

export default videos;