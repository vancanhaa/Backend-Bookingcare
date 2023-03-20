import express from "express";
import { getAboutPage, getHomePage } from "../controller/homeController";


const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage)
  router.get("/aboutpage", getAboutPage)
  return app.use("/", router);
};

module.exports = initWebRoutes;
