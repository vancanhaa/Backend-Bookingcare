const db = require("../models");
const CRUDService = require("../services/CRUDService");

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
  const message = await CRUDService.createNewUser(req.body);
  return res.send("post crud from server");
};

const displayGetCRUD = async (req, res) => {
  const data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const userData = await CRUDService.getUserInfoById(userId);
    // check userData
    return res.render("editCRUD.ejs", {
      userData: userData,
    });
  } else {
    return res.send("User not found");
  }
};

const putCRUD = async (req, res) => {
  const data = req.body;
  const allUsers = await CRUDService.updateUserData(data);

  return res.render("displayCRUD", {
    dataTable: allUsers,
  });
};

const deleteCRUD = async (req, res) => {
  const id = req.query.id;
  if (id) {
    const data = await CRUDService.deleteUserById(id);
    return res.render("displayCRUD.ejs", {
      dataTable: data,
    });
  } else {
    return res.send("user not found");
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
