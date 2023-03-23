import express from "express";
import {
  getAboutPage,
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
} from "../controller/homeController";
import { handleLogin, handleLogout } from "../controller/userController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/aboutpage", getAboutPage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);
  router.get("/get-crud", displayGetCRUD);
  router.get("/edit-crud", getEditCRUD);
  router.post("/put-crud", putCRUD);
  router.get("/delete-crud", deleteCRUD);

  router.post("/api/login", handleLogin);
  router.get("/api/logout", handleLogout);

  return app.use("/", router);
};

export default initWebRoutes;
