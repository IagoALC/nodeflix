import videoRoutes from './videoRoutes.js';
import categoryRoutes from './categoryRoutes.js';
import userRoutes from './userRoutes.js';
import strategyModule from "../auth/strategy.js";
import passport from "passport";
strategyModule(passport);


const routes = (app) => {
  app.use(videoRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
};

export default routes;