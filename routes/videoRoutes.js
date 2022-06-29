import VideoController from "../controllers/videoController.js";
import express from "express";

const routes = express.Router();

routes.get("/videos", VideoController.getAllVideos);
routes.get("/videos/:id", VideoController.getVideoById);
routes.post("/videos", VideoController.createVideo);
routes.put("/videos/:id", VideoController.updateVideo);
routes.delete("/videos/:id", VideoController.deleteVideo);

export default routes;
