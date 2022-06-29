import mongoose from 'mongoose';

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
  }
});

const videos = mongoose.model('videos', videosSchema);

export default videos;