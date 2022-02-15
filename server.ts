import express from 'express';

const app = express();
const port = 3000;

/** Define routers **/
import indexRouter from './app/routes/index';

/** Use routers **/
app.use('/', indexRouter);

/** Fire up server **/
app.listen(port, () => {
  console.log("Server started");
});