import VideoController from "../controllers/videoController.js";
import express from "express";
import middleware from "../auth/middleware.js";

const routes = express.Router();

routes.get("/videos", middleware.bearer, VideoController.getAllVideos);
routes.get("/videos/:id", middleware.bearer, VideoController.getVideoById);
routes.post("/videos", middleware.bearer, VideoController.createVideo);
routes.put("/videos/:id", middleware.bearer, VideoController.updateVideo);
routes.delete("/videos/:id", middleware.bearer, VideoController.deleteVideo);

export default routes;
