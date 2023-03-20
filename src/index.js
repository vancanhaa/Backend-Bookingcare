import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv"

import connectDB from "./config/connectDB";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
dotenv.config();
const port = process.env.PORT || 6969;

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//use viewEngine
viewEngine(app);
//use Route
initWebRoutes(app);
//connect DB
connectDB()


app.listen(port, () => {
  console.log(`App is runing on the port http://localhost:${port}`);
});
