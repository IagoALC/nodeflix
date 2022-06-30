import videoRoutes from './videoRoutes.js';
import categoryRoute from './categoryRoutes.js';
const routes = (app) => {
  app.use(videoRoutes);
  app.use(categoryRoute);
};

export default routes;