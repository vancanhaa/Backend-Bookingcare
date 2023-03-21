import express from "express";
import {
  getAboutPage,
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
} from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/aboutpage", getAboutPage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.post("/put-crud", putCRUD);
  return app.use("/", router);
};

module.exports = initWebRoutes;
