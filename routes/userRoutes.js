import UserController from "../controllers/userController.js";
import express from "express";
import middleware from "../auth/middleware.js";


const routes = express.Router();

routes.get("/users", middleware.bearer, UserController.getAllUsers);
routes.get("/users/:id", middleware.bearer, UserController.getUserById);
routes.post("/users", middleware.bearer, UserController.createUser);
routes.post("/login", middleware.local, UserController.login);
routes.put("/users/:id", middleware.bearer, UserController.updateUser);
routes.delete("/users/:id", middleware.bearer, UserController.deleteUser);

export default routes;