import videoRoutes from './videoRoutes.js';
const routes = (app) => {
  app.use(videoRoutes);
};

export default routes;