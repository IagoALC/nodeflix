import videoModel from '../model/Video.js';

class VideoController {
  static async getAllVideos(req, res) {
    try {
      const limit =  5;
      const query = req.query.title ? { title: req.query.title } : {};
      const page = req.query.page || 1;
      const offset = (page - 1) * limit;
      const allVideos = await videoModel.find(query).countDocuments();
      const videos = await videoModel.find(query).skip(offset).limit(limit);
      const pageTotal = allVideos > 0 ? Math.ceil(allVideos / limit) : 1;
      const next = page < pageTotal ? `/videos?page=${parseInt(page) + 1}` : null;
      const previous = page > 1 ? `/videos?page=${parseInt(page) - 1}` : null;
      if(page > pageTotal) {
        res.status(404).json({
          success: false,
          message: 'Page not found'
        })
      }
      res.status(200).json({
        success: true,
        next: next,
        previous: previous,
        pageTotal: pageTotal,
        count: videos.length,
        data: videos
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getFreeVideos(req, res) {
    try {
      const limit =  5;
      const videos = await videoModel.find().limit(limit);
      res.status(200).json({
        success: true,
        count: videos.length,
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
      const video = await videoModel.findById(req.params.id);
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

  static async getVideoByCategory(req, res) {
    try {
      const videos = await videoModel.find({ categories_id: req.params.id });
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

  static async createVideo(req, res) {
    try {
      const newVideo = await videoModel.create(req.body);
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
      const updatedVideo = await videoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
      await videoModel.findByIdAndDelete(req.params.id);
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