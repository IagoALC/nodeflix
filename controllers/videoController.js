import video from '../model/Video.js';

class VideoController {
  static async getAllVideos(req, res) {
    try {
      const videos = await video.find();
      res.status(200).json({
        success: true,
        data: videos
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getVideoById(req, res) {
    try {
      const video = await video.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: video
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createVideo(req, res) {
    try {
      const newVideo = await video.create(req.body);
      res.status(201).json({
        success: true,
        data: newVideo
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateVideo(req, res) {
    try {
      const updatedVideo = await video.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({
        success: true,
        data: updatedVideo
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteVideo(req, res) {
    try {
      await video.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Video deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default VideoController;