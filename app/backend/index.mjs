// Require all dependencies:

import appRoot from 'app-root-path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';
import debug from './routes/middleware/debug';



// Create express app instance:

const app = express();



// Configure general app settings and functionality:

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compression());

app.use(express.static(`${appRoot}/app/dist`));
app.use(express.static(`${appRoot}/app/public`));



// Set up the routes:

routes(app);



// Set up error handling and debug logging:

app.use(debug);



// Run the app:

app.listen(config.port);

if (config.environment === 'local') {
  console.log(`App is being served at localhost:${config.port}`);
}



// Export the app:

export default app;
