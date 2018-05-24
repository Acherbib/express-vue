import express from 'express';
import api from './api';
import pages from './pages';



function routes(app) {
  const routers = {
    public: express.Router()
  };

  api(routers);
  pages(routers);

  app.use('/', routers.public);
};



export default routes;
