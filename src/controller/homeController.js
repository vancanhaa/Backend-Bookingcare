import db from "../models";
import { createNewUser } from "../services/CRUDService";
const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

const getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

const getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

const postCRUD = async (req, res) => {
  const message = await createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
};
