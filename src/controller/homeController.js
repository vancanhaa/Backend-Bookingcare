import db from "../models/index.js";
const getHomePage = async (req, res) => {
  try {
    const data = await db.User.findAll();

    return res.render("homepage.ejs", {
      data: JSON.stringify(data[0])
    });
  } catch (e) {
    console.log(e);
  }
};
const getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage,
  getAboutPage,
};
