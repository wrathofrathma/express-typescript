// Import config to setup the global configuration object.
import { config } from './config'
import express from 'express';

const app = express();

/** Define routers **/
import indexRouter from './app/routes/index';

/** Use routers **/
app.use('/', indexRouter);

/** Global Middleware Example */
import ExampleMiddleware from './app/http/middleware/ExampleMiddleware'

/** Using the middleware on all routes */
app.use(ExampleMiddleware);

/** Using a custom error handler */
import ExceptionHandler from './app/exceptions/ExceptionHandler';

app.use(ExceptionHandler);

/** Fire up server **/
app.listen(config.app.port, () => {
  console.log("Server started");
});