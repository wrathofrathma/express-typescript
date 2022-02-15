// Import config to setup the global configuration object.
import { config } from './config'
import express from 'express';

const app = express();

/** Define routers **/
import indexRouter from './app/routes/index';

/** Use routers **/
app.use('/', indexRouter);

/** Fire up server **/
app.listen(config.app.port, () => {
  console.log("Server started");
});